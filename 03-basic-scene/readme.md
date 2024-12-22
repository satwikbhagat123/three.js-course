# Vite + Three.js Project

## Build Tools Overview
We have various build tools like:

1. **Webpack**
2. **Vite**
3. **Gulp**
4. **Parcel**

### Why Vite?
Vite (a French word meaning "quick") is one of the most popular build tools because it:

1. Installs faster
2. Runs faster
3. Is less prone to bugs
4. Offers a much better developer experience

In this course, we will use **Vite** as our build tool.

---

## Vite
Vite is a build tool where we can add plugins to handle features like exotic languages or special files (e.g., GLSL or React). It was created by **Evan You**, who also created Vue.js.

---

## First Vite Project

### Terminal Commands to Know

- `cd`: Change the current directory
- `ls`: List contents of the current directory
- `pwd`: Display the current directory path
- `clear`: Clear the terminal

### Install Node.js
To run Vite, you need to have Node.js installed.

1. Download Node.js (LTS version is recommended).
2. Verify the installation by running:

```bash
node -v
```

If the terminal displays the version, Node.js is installed successfully.

### Create a Node.js Project
Ensure you're in the desired folder, then run:

```bash
npm init -y
```

This creates a `package.json` file in your project folder.

### Add Dependencies
We will use Vite and Three.js in this project.

1. Install Vite:

```bash
npm i vite
```

2. Install Three.js:

```bash
npm i three
```

---

## Project Structure

### Basic HTML
Create an `index.html` file with the following boilerplate code:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>03-first three.js project</title>
</head>
<body>
    <h1>soon to be a three.js website</h1>
    <script type="module" src="script.js"></script>
</body>
</html>
```

Replace the `scripts` section in `package.json` with:

```json
"scripts": {
    "dev": "vite",
    "build": "vite build"
}
```

Run the project using:

```bash
npm run dev
```

Copy the localhost URL displayed in the terminal and open it in your browser. To stop the live server, press `Ctrl + C` in the terminal.

---

## Linking Scripts

Update `index.html`:

1. Remove the `<h1>` tag.
2. Add a `<canvas>` element with a class of `.webgl` before loading scripts:

```html
<canvas class="webgl"></canvas>
```

Link the `script.js` file and include `type="module"` in the script tag:

```html
<script type="module" src="script.js"></script>
```

---

## Setting Up Three.js

### Import Three.js

In your `script.js`, start by importing Three.js:

```javascript
import * as THREE from 'three';
```

---

### First Scene

Four essential elements are needed:

1. **Scene**
2. **Object**
3. **Camera**
4. **Renderer**

#### 1. Scene

The scene acts as a container for objects, models, lights, etc. Create a scene:

```javascript
const scene = new THREE.Scene();
```

#### 2. Object

To create an object:

- Define the geometry (shape):

```javascript
const geometry = new THREE.BoxGeometry(1, 1, 1);
```

- Define the material (appearance):

```javascript
const material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
```

- Combine geometry and material into a mesh:

```javascript
const mesh = new THREE.Mesh(geometry, material);
```

- Add the mesh to the scene:

```javascript
scene.add(mesh);
```

#### 3. Camera

To add a camera:

- Define the canvas size:

```javascript
const sizes = {
    width: 800,
    height: 600
};
```

- Create a perspective camera with a 75° field of view:

```javascript
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3; // Position the camera
scene.add(camera); // Add camera to the scene
```

#### 4. Renderer

To render the scene:

- Select the canvas:

```javascript
const canvas = document.querySelector('canvas.webgl');
```

- Create the renderer:

```javascript
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});
```

- Set the renderer size and render the scene:

```javascript
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
```

---

## Final Code

Here is the complete `script.js`:

```javascript
import * as THREE from 'three';

// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
    width: 800,
    height: 600
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
```

---

You're all set to create your first Three.js project with Vite!
