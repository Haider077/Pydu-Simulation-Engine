// The three.js scene: the 3D world where you put objects
const scene = new THREE.Scene();
const loader = new THREE.TextureLoader();
const renderer = new THREE.WebGLRenderer({ antialias: false });
// The camera
const camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    1,
    10000
  );
  
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x00ff00, 1);
// Append the renderer canvas into <body>
document.body.append(renderer.domElement);

function setRendererBackgroundColor(hexColor){

    renderer.setClearColor(hexColor, 1);

}
function setCameraPosition(xPos,yPos,zPos){

    camera.position.x = xPos;
    camera.position.y = yPos;
    camera.position.z = zPos;

}
function createCubeObject(xDimension,yDimension,zDimension,hexColor){

    const cube  = {

        geometry: new THREE.BoxGeometry(xDimension, yDimension, zDimension),

        material: new THREE.MeshBasicMaterial({ color: hexColor })

    }
    cube.mesh = new THREE.Mesh(cube.geometry, cube.material);
    scene.add(cube.mesh);
    //returns mesh to be held on to an Object
    return cube.mesh;

}
function setObjectPosition(object,xPos,yPos,zPos){

    object.position.set(xPos,yPos,zPos);


}
function translateObjectOverTime(object,xPos,yPos,zPos,time){

    

}
function render() {
    // Render the scene and the camera
    renderer.render(scene, camera);
    // Make it call the render() function about every 1/60 second
    requestAnimationFrame(render);
}