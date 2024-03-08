// 导入Three.js库
import * as THREE from 'three';

// 初始化场景、相机和渲染器
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 创建文字几何体
const textGeometry1 = new THREE.TextGeometry('Hello', {
    font: 'https://cdn.jsdelivr.net/gh/mrdoob/three.js/examples/fonts/helvetiker_regular.typeface.json',
    size: 80,
    height: 20,
    curveSegments: 12,
    bevelEnabled: true,
    bevelThickness: 2,
    bevelSize: 5,
    bevelOffset: 0,
    bevelSegments: 5
});

const textGeometry2 = new THREE.TextGeometry('World', {
    font: 'https://cdn.jsdelivr.net/gh/mrdoob/three.js/examples/fonts/helvetiker_regular.typeface.json',
    size: 80,
    height: 20,
    curveSegments: 12,
    bevelEnabled: true,
    bevelThickness: 2,
    bevelSize: 5,
    bevelOffset: 0,
    bevelSegments: 5
});

// 创建文字材质
const material = new THREE.MeshPhongMaterial({ color: 0x00ff00 });

// 创建文字网格
const textMesh1 = new THREE.Mesh(textGeometry1, material);
textMesh1.position.set(-150, 0, 0);
scene.add(textMesh1);

const textMesh2 = new THREE.Mesh(textGeometry2, material);
textMesh2.position.set(150, 0, 0);
scene.add(textMesh2);

// 创建环境光
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

// 创建点光源
const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(50, 50, 50);
scene.add(pointLight);

// 设置相机位置
camera.position.z = 300;

// 渲染循环
function animate() {
    requestAnimationFrame(animate);

    // 旋转文字
    textMesh1.rotation.x += 0.01;
    textMesh1.rotation.y += 0.01;
    textMesh2.rotation.x += 0.01;
    textMesh2.rotation.y += 0.01;

    renderer.render(scene, camera);
}

animate();
