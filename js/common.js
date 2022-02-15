var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer({alpha:true, antialias:true});
renderer.setSize(window.innerWidth, window.innerHeight);
//document.body.appendChild(renderer.domElement);
document.getElementsByClassName("three")[0].appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0xFFFF00 } );
material.lights = true;

var cube = new THREE.Mesh( geometry, material );
scene.add(cube);

camera.position.z = 5;

function animate() {

    requestAnimationFrame( animate ); //每帧执行一次
    cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
    renderer.render( scene, camera );
}
animate();