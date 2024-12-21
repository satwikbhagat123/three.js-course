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