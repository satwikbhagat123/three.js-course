import * as THREE from 'three' // THREE library ko import kar rahe hain

//canvas
const canvas = document.querySelector('canvas.webgl') // webgl canvas ko select kar rahe hain

//scene
const scene = new THREE.Scene() // ek naya scene create kar rahe hain

//object
const geometry = new THREE.BoxGeometry(1, 1, 1) // ek box geometry banate hain
const material = new THREE.MeshBasicMaterial({ color: 0xff0000}) // material set kar rahe hain, red color aur wireframe mode mein
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

05-animation/exercise/src/script.js
//clock
const clock = new THREE.Clock() // ek naya clock object create kar rahe hain

//animations
const tick = () => { // tick function define kar rahe hain
    //clock
    const elapsedTime = clock.getElapsedTime() // clock se elapsed time le rahe hain

    //update objects
    mesh.rotation.z = elapsedTime // mesh ki z rotation ko elapsed time se update kar rahe hain 

    //update objects
    // mesh.position.x += 0.01 // x position ko 0.01 se badha rahe hain (commented out)
    // mesh.position.y += 0.01 // y position ko 0.01 se badha rahe hain (commented out)
    // mesh.position.z += 0.01 // z position ko 0.01 se badha rahe hain (commented out)

    mesh.rotation.y += 0.01 // mesh ki y rotation ko 0.01 se update kar rahe hain

    renderer.render(scene, camera) // scene ko camera ke saath render kar rahe hain
    
    window.requestAnimationFrame(tick) // next frame ke liye tick function ko call kar rahe hain
}
tick() // tick function ko pehli baar call kar rahe hain