var scene = new THREE.Scene();
scene.background=new THREE.Color("black");
var camera= new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,1,2300);
camera.position.set(0,0,0)
var renderer = new THREE.WebGLRenderer({antialias:true,alpha:true});
renderer.setSize(window.innerWidth,window.innerHeight);
var controls = new OrbitControls(camera,renderer.domElement);
var tex= new THREE.TextureLoader().load("backg.jpg");
var geo= new THREE.SphereGeometry(1000,128,128);
var mat= new THREE.MeshPhongMaterial({map:tex});
mat.side=THREE.BackSide;
controls.minDistance=1;

var obj = new THREE.Mesh(geo,mat);
var light = new THREE.PointLight(0xffffff,1,1000,0);
light.position.set(0,0,0);
scene.add(light);
scene.add(obj);

document.body.appendChild(renderer.domElement);
renderer.render(scene,camera);
window.onresize=()=>{
    renderer.setSize(window.innerWidth,window.innerHeight);
    renderer.render(scene,camera);
};
renderer.setAnimationLoop(()=>{
    renderer.render(scene,camera);
    
});