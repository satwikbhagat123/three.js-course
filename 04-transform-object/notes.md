// THREE library ko import kar rahe hain
import * as THREE from 'three'

// Canvas ko select kar rahe hain
const canvas = document.querySelector('canvas.webgl')

// Scene create kar rahe hain
const scene = new THREE.Scene()

/**
 * Objects
 */
// Box geometry create kar rahe hain
const geometry = new THREE.BoxGeometry(1, 1, 1)
// Material create kar rahe hain, jo red color ka hoga
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
// Mesh create kar rahe hain, jo geometry aur material ko combine karega
const mesh = new THREE.Mesh(geometry, material)
// Mesh ko scene mein add kar rahe hain
scene.add(mesh)

//position

// mesh.position.z =1 // z position set karne ka code comment kiya hua hai
// mesh.position.y =1 // y position set karne ka code comment kiya hua hai
// mesh.position.x =1 // x position set karne ka code comment kiya hua hai

// Inhe ek line mein likh rahe hain
mesh.position.set(0.7, -0.6, 1)

//scale
// mesh.scale.x = 2 // x scale set karne ka code comment kiya hua hai
// mesh.scale.y =0.5 // y scale set karne ka code comment kiya hua hai
// mesh.scale.z =0.5 // z scale set karne ka code comment kiya hua hai

// Inhe ek line mein set kar rahe hain
mesh.scale.set(2, 0.5, 0.5)

//rotation
// Rotation order ko set kar rahe hain
mesh.rotation.reorder('YXZ')
// y rotation ko set kar rahe hain
mesh.rotation.y = Math.PI * 0.25
// x rotation ko set kar rahe hain
mesh.rotation.x = Math.PI * 0.25

// Axes helper create kar rahe hain
const axesHelper = new THREE.AxesHelper(2)
// Axes helper ko scene mein add kar rahe hain
scene.add(axesHelper)

/**
 * Sizes 
 */
// Sizes ka object create kar rahe hain
const sizes = {
    width: 800, // width set kar rahe hain
    height: 600 // height set kar rahe hain
}

/**
 * Camera
 */
// Perspective camera create kar rahe hain
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
// Camera ki z position set kar rahe hain
camera.position.z = 3
// camera.position.y = 1 // y position set karne ka code comment kiya hua hai
// camera.position.x = 1 // x position set karne ka code comment kiya hua hai
// Camera ko scene mein add kar rahe hain
scene.add(camera)

// Camera ko mesh ki position ki taraf dekhne ke liye set kar rahe hain
camera.lookAt(mesh.position)

/**
 * Renderer
 */
// WebGL renderer create kar rahe hain
const renderer = new THREE.WebGLRenderer({
    canvas: canvas // Renderer ko canvas pass kar rahe hain
})
// Renderer ki size set kar rahe hain
renderer.setSize(sizes.width, sizes.height)
// Scene ko camera ke saath render kar rahe hain
renderer.render(scene, camera)

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# transform a object 

there are 4 propertiesto transform objects 
1. position 
2. scale
3. rotation
4. quaternion

# move objects
with position which has 3 properties x, y, z

if we write the below code then the cube will move upwards in y axis direction

mesh.position.y = 1

## in three.js we consider the following
1. x-axis :- it goes right
2. y-axis :- it goes upwards
3. z-axis :- it goes backwards

mesh.position.x = 1          //it goes left and right 
mesh.position.z = 1         //it goes  forward and backwards

const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color : 0xff0000})
const mesh = new THREE.Mesh(geometry, material)
mesh,position.x = 0.7
mesh.position.y = -0.6
mesh.position.z = 1
scene.add(mesh)

# make sure that u put this line before renderer b/c renderer takes picture of the object and if u put the below code after renderer then the camera will not be able to click the pic of the objet 

mesh,position.x = 0.7
mesh.position.y = -0.6
mesh.position.z = 1

# instead of writting the above code many time we can write it in short like below 
    mesh.position.set (0.7, -0.6, 1)    //make sure the order will be first x, y, z  

# to find the distance b/w camera and cube write the below code after camera is created 

console.log(mesh.position.distanceTo(camera.position))

after that check in console u will find the distance b/w camera and cube

# axes helper
 by applying this you can see the x, y, z axis on the object

 // Axes helper create kar rahe hain
const axesHelper = new THREE.AxesHelper(2)   //there 2 means we are increasing the length of the axis 
// Axes helper ko scene mein add kar rahe hain
scene.add(axesHelper) 

by applying this u will be able to see the only two axis and to see the all three axis we have to move the camera in x, y, z direction before scene.add(camera)

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
// Camera ki z position set kar rahe hain
camera.position.z = 3
 camera.position.y = 1 // y position set karne ka code comment kiya hua hai
 camera.position.x = 1 // x position set karne ka code comment kiya hua hai
// Camera ko scene mein add kar rahe hain
scene.add(camera)

so now u can see the all axis the red one is positive x axis and the green one is the positive y axis  and the blue one is the positive z axis and the length is usually the the 1 unit 

# scale objects 
now comment all the position which we set 

//position

// mesh.position.z =1                             // z position set karne ka code comment kiya hua hai
// mesh.position.y =1                             // y position set karne ka code comment kiya hua hai
// mesh.position.x =1                             // x position set karne ka code comment kiya hua hai

and then writethe below code after scene.add(mesh)

//scale 
 mesh.scale.x = 2         // x scale set karne ka code comment kiya hua hai
 mesh.scale.y =0.5         // y scale set karne ka code comment kiya hua hai
 mesh.scale.z =0.5         // z scale set karne ka code comment kiya hua hai

 by writing above code we will change the length and height and all in their respective x,y,z axis 

# we can write it in single line also

mesh.scale.set(2, 0.5, 0.5)

# rotate objects
we can rotate objects by using rotation or quaternion

# let's start with rotation

//rotation
// Rotation order ko set kar rahe hain
mesh.rotation.reorder('YXZ')
mesh.rotation.x = Math.PI * 0.25
mesh.rotation.y = Math.PI * 0.25
 
we can play with these by applying Math.PI to the rotation by doing  Math.PI /2 or something like that 

# scene graph

if we want that more tha one object is there and if we want that our whole object move in single go we use have to make the group and inside that we can put the all objects and rotate in in a single command as given below

// Group create kar rahe hain
const group = new THREE.Group()
group.position.y = 1
group.scale.y = 2
group.rotation.y = 1
scene.add(group)

// Pehla cube create kar rahe hain
const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1), // Cube ki geometry set kar rahe hain
    new THREE.MeshBasicMaterial({ color: 0xff0000 }) // Cube ka material set kar rahe hain (red color)
)
// Pehle cube ko group mein add kar rahe hain
group.add(cube1)

// Dusra cube create kar rahe hain
const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1), // Cube ki geometry set kar rahe hain
    new THREE.MeshBasicMaterial({ color: 0x00ff00 }) // Cube ka material set kar rahe hain (green color)
)
// Dusre cube ki x position set kar rahe hain
cube2.position.x = -2
// Dusre cube ko group mein add kar rahe hain
group.add(cube2)

// Teesra cube create kar rahe hain
const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1), // Cube ki geometry set kar rahe hain
    new THREE.MeshBasicMaterial({ color: 0x0000ff }) // Cube ka material set kar rahe hain (blue color)
)
// Teesre cube ki x position set kar rahe hain
cube3.position.x = 2
// Teesre cube ko group mein add kar rahe hain
group.add(cube3)

# final code will look like this:-

// THREE library ko import kar rahe hain
import * as THREE from 'three'

// Canvas ko select kar rahe hain
const canvas = document.querySelector('canvas.webgl')

// Scene create kar rahe hain
const scene = new THREE.Scene()

/**
 * Objects
 */
// Group create kar rahe hain
const group = new THREE.Group()
// Group ki y position set kar rahe hain
group.position.y = 1
// Group ka y scale set kar rahe hain
group.scale.y = 2
// Group ka y rotation set kar rahe hain
group.rotation.y = 1
// Group ko scene mein add kar rahe hain
scene.add(group)

// Pehla cube create kar rahe hain
const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1), // Cube ki geometry set kar rahe hain
    new THREE.MeshBasicMaterial({ color: 0xff0000 }) // Cube ka material set kar rahe hain (red color)
)
// Pehle cube ko group mein add kar rahe hain
group.add(cube1)

// Dusra cube create kar rahe hain
const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1), // Cube ki geometry set kar rahe hain
    new THREE.MeshBasicMaterial({ color: 0x00ff00 }) // Cube ka material set kar rahe hain (green color)
)
// Dusre cube ki x position set kar rahe hain
cube2.position.x = -2
// Dusre cube ko group mein add kar rahe hain
group.add(cube2)

// Teesra cube create kar rahe hain
const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1), // Cube ki geometry set kar rahe hain
    new THREE.MeshBasicMaterial({ color: 0x0000ff }) // Cube ka material set kar rahe hain (blue color)
)
// Teesre cube ki x position set kar rahe hain
cube3.position.x = 2
// Teesre cube ko group mein add kar rahe hain
group.add(cube3)

// Axes helper create kar rahe hain
const axesHelper = new THREE.AxesHelper(2)
// Axes helper ko scene mein add kar rahe hain
scene.add(axesHelper)

/**
 * Sizes 
 */
// Sizes ka object create kar rahe hain
const sizes = {
    width: 800, // Width set kar rahe hain
    height: 600 // Height set kar rahe hain
}

/**
 * Camera
 */
// Perspective camera create kar rahe hain
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
// Camera ki z position set kar rahe hain
camera.position.z = 3
// camera.position.y = 1 // y position set karne ka code comment kiya hua hai
// camera.position.x = 1 // x position set karne ka code comment kiya hua hai
// Camera ko scene mein add kar rahe hain
scene.add(camera)

/**
 * Renderer
 */
// WebGL renderer create kar rahe hain
const renderer = new THREE.WebGLRenderer({
    canvas: canvas // Renderer ko canvas pass kar rahe hain
})
// Renderer ki size set kar rahe hain
renderer.setSize(sizes.width, sizes.height)
// Scene ko camera ke saath render kar rahe hain
renderer.render(scene, camera)