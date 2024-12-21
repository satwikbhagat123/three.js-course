import * as THREE from 'three' // THREE library ko import kar rahe hain

//canvas
const canvas = document.querySelector('canvas.webgl') // webgl canvas ko select kar rahe hain

//scene
const scene = new THREE.Scene() // ek naya scene create kar rahe hain

//object
const geometry = new THREE.BoxGeometry(1, 1, 1) // ek box geometry banate hain
const material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true }) // material set kar rahe hain, red color aur wireframe mode mein
const mesh = new THREE.Mesh(geometry, material) // geometry aur material ko mila kar mesh banate hain
scene.add(mesh) // mesh ko scene mein add kar rahe hain

//sizes
const sizes = { // sizes ka object banate hain
    width: 800, // width set kar rahe hain
    height: 600 // height set kar rahe hain
}

//camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height) // perspective camera create kar rahe hain
camera.position.z = 3 // camera ki z position set kar rahe hain
scene.add(camera) // camera ko scene mein add kar rahe hain

//renderer
const renderer = new THREE.WebGLRenderer({ // WebGL renderer create kar rahe hain
    canvas: canvas // renderer ko canvas pass kar rahe hain
})
renderer.setSize(sizes.width, sizes.height) // renderer ki size set kar rahe hain
renderer.render(scene, camera) // scene ko camera ke saath render kar rahe hain