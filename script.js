const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth / window.innerHeight,
0.1,
1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

document.getElementById("container").appendChild(renderer.domElement);

camera.position.z = 20;


// Create spiral cubes
const cubes = [];

for(let i=0; i<40; i++){

const geometry = new THREE.BoxGeometry();

const material = new THREE.MeshBasicMaterial({
color:0x00ffff,
wireframe:true
});

const cube = new THREE.Mesh(geometry, material);

cube.position.x = Math.cos(i*0.3)*6;
cube.position.y = Math.sin(i*0.3)*6;
cube.position.z = i - 20;

scene.add(cube);

cubes.push(cube);
}


// Animation
function animate(){

requestAnimationFrame(animate);

cubes.forEach((cube,i)=>{

cube.rotation.x += 0.01;
cube.rotation.y += 0.01;

});

scene.rotation.z += 0.002;

renderer.render(scene,camera);

}

animate();