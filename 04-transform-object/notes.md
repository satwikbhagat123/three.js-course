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