# Transform an Object

There are 4 properties to transform objects:
1. **Position**
2. **Scale**
3. **Rotation**
4. **Quaternion**

## Move Objects

We can move objects using the `position` property, which has 3 components: `x`, `y`, and `z`.

For example, the following code moves the cube upwards in the y-axis direction:

```javascript
mesh.position.y = 1;
```

### Axes in Three.js
1. **x-axis**: Goes right
2. **y-axis**: Goes upwards
3. **z-axis**: Goes backwards

```javascript
mesh.position.x = 1; // Moves left and right
mesh.position.z = 1; // Moves forward and backward
```

### Example
```javascript
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
mesh.position.x = 0.7;
mesh.position.y = -0.6;
mesh.position.z = 1;
scene.add(mesh);
```

### Shorter Syntax
Instead of setting each position property individually, you can use:

```javascript
mesh.position.set(0.7, -0.6, 1); // Order: x, y, z
```

### Distance Between Camera and Object
To find the distance between the camera and an object, use:

```javascript
console.log(mesh.position.distanceTo(camera.position));
```

### Axes Helper
The Axes Helper visualizes the x, y, and z axes of an object.

```javascript
const axesHelper = new THREE.AxesHelper(2); // Length of axes is 2 units
scene.add(axesHelper);
```

To view all axes, move the camera in the x, y, and z directions before adding it to the scene:

```javascript
camera.position.z = 3;
camera.position.y = 1;
camera.position.x = 1;
scene.add(camera);
```

The red axis is the positive x-axis, green is the positive y-axis, and blue is the positive z-axis.

## Scale Objects
To scale objects, use the `scale` property.

### Example
```javascript
// Scaling individually
mesh.scale.x = 2;
mesh.scale.y = 0.5;
mesh.scale.z = 0.5;
```

### Shorter Syntax
```javascript
mesh.scale.set(2, 0.5, 0.5); // Order: x, y, z
```

## Rotate Objects
We can rotate objects using `rotation` or `quaternion`. Let's start with `rotation`.

### Example
```javascript
mesh.rotation.reorder('YXZ');
mesh.rotation.x = Math.PI * 0.25;
mesh.rotation.y = Math.PI * 0.25;
```

You can experiment with rotation values, such as `Math.PI / 2` or other multiples of `Math.PI`.

## Scene Graph
To move multiple objects as a group, use a **Group**. Add all objects to the group and then transform the group.

### Example
```javascript
const group = new THREE.Group();
group.position.y = 1;
group.scale.y = 2;
group.rotation.y = 1;
scene.add(group);

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
group.add(cube1);

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x00ff00 })
);
cube2.position.x = -2;
group.add(cube2);

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x0000ff })
);
cube3.position.x = 2;
group.add(cube3);
```

## Final Code

```javascript
// Importing THREE.js
import * as THREE from 'three';

// Selecting the canvas
defineconst canvas = document.querySelector('canvas.webgl');

// Creating the scene
const scene = new THREE.Scene();

// Creating a group
const group = new THREE.Group();
group.position.y = 1;
group.scale.y = 2;
group.rotation.y = 1;
scene.add(group);

// Creating cubes and adding them to the group
const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
group.add(cube1);

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x00ff00 })
);
cube2.position.x = -2;
group.add(cube2);

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x0000ff })
);
cube3.position.x = 2;
group.add(cube3);

// Adding Axes Helper
const axesHelper = new THREE.AxesHelper(2);
scene.add(axesHelper);

// Setting sizes
const sizes = {
    width: 800,
    height: 600
};

// Creating the camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Creating the renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
```
