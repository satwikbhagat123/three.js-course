// Importing Three.js library
import * as THREE from 'three'
// Importing OrbitControls for camera control
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

// Cursor object banate hain
const cursor = {
    x: 0, // Cursor ka x position
    y: 0  // Cursor ka y position
}

// Mouse move event listener add karte hain
window.addEventListener('mousemove', (event) => {
    // Cursor ki x position ko screen width se normalize karte hain
    cursor.x = event.clientX / sizes.width - 0.5
    // Cursor ki y position ko screen height se normalize karte hain
    cursor.y = (event.clientY / sizes.height - 0.5)
})

/**
 * Base
 */
// Canvas ko select karte hain
const canvas = document.querySelector('canvas.webgl')

// Sizes object banate hain
const sizes = {
    width: 800,  // Canvas ki width
    height: 600  // Canvas ki height
}

// Scene create karte hain
const scene = new THREE.Scene()

// Mesh object banate hain
const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1, 5, 5, 5), // Box geometry define karte hain
    new THREE.MeshBasicMaterial({ color: 0xff0000 }) // Material set karte hain
)
// Mesh ko scene mein add karte hain
scene.add(mesh)

// Camera create karte hain
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
// const aspectRatio = sizes.width / sizes.height // Aspect ratio calculate karte hain
// const camera = new THREE.OrthographicCamera(-1 * aspectRatio, 1 * aspectRatio, 1, -1, 0.1, 100) // Orthographic camera banate hain
// camera.position.x = 2 // Camera ki x position set karte hain
// camera.position.y = 2 // Camera ki y position set karte hain
camera.position.z = 3 // Camera ki z position set karte hain
camera.lookAt(mesh.position) // Camera ko mesh ki taraf dekhne ke liye set karte hain
scene.add(camera) // Camera ko scene mein add karte hain

// Controls create karte hain
const controls = new OrbitControls(camera, canvas) // OrbitControls ko camera aur canvas ke saath initialize karte hain
controls.enableDamping = true // Damping enable karte hain for smooth movement

// Renderer create karte hain
const renderer = new THREE.WebGLRenderer({
    canvas: canvas // Renderer ko canvas ke saath initialize karte hain
})
renderer.setSize(sizes.width, sizes.height) // Renderer ki size set karte hain

// Animate function define karte hain
const tick = () => {
    // const elapsedTime = clock.getElapsedTime() // Elapsed time ko track karte hain (commented out)

    // Update objects
    // mesh.rotation.y = elapsedTime; // Mesh ki rotation update karte hain (commented out)

    // Update camera
    // camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 3 // Camera ki x position update karte hain (commented out)
    // camera.position.y = Math.cos(cursor.x * Math.PI * 2) * 3 // Camera ki y position update karte hain (commented out)
    // camera.position.y = cursor.y * 5 // Camera ki y position cursor ke hisaab se update karte hain (commented out)
    // camera.lookAt(mesh.position) // Camera ko mesh ki taraf dekhne ke liye set karte hain (commented out)

    controls.update() // Controls ko update karte hain

    // Render karte hain
    renderer.render(scene, camera) // Scene aur camera ko render karte hain

    // Next frame par tick function ko call karte hain
    window.requestAnimationFrame(tick) // Animation frame ke liye tick function ko call karte hain
}

// Tick function ko call karte hain
tick()