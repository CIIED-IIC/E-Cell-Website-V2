import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.161.0/build/three.module.js';
import { FontLoader } from 'https://cdn.jsdelivr.net/npm/three@0.161.0/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'https://cdn.jsdelivr.net/npm/three@0.161.0/examples/jsm/geometries/TextGeometry.js';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.161.0/examples/jsm/controls/OrbitControls.js';
import getStarfield from '../Assets/threejs-assets/getStarfield.js';

// Wait for DOM to be fully loaded before executing scripts
document.addEventListener("DOMContentLoaded", () => {
    initThreeJS();
    startCountdown("2025-12-31 23:59:59"); // Set your target date
});

// === THREE.JS FUNCTIONALITY ===
function initThreeJS() {
    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    const container = document.getElementById('threejs-container');
    container.appendChild(renderer.domElement);
    
    // Starfield
    const stars = getStarfield({numStars: 20000});
    scene.add(stars)
    
    // Lighting (Soft Ambient for Modern Look)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8); 
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 10).normalize();
    scene.add(directionalLight);
    
    // Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    camera.position.set(0, 0, 15);
    controls.update();
    
    // Load Font and Add Text
    const loader = new FontLoader();
    let textMesh; // Declare globally for resizing
    
    loader.load('assets/Rubik Microbe_Regular.json', function (font) {
        const textGeometry = new TextGeometry('TEDxBITSDubai', {
            font: font,
            size: 2.5,
            height: 0.0001,
            curveSegments: 10,
            bevelEnabled: true,
            bevelThickness: 0.0005,
            bevelSize: 0.001,
            bevelOffset: 0.01,
            bevelSegments: 10
        });
    
        const textMaterial = new THREE.MeshStandardMaterial({ 
            color: 0xff0000, 
            metalness: 0.5, 
            roughness: 0.2 
        });
        textMesh = new THREE.Mesh(textGeometry, textMaterial);
        
        // Centering Text
        textGeometry.computeBoundingBox();
        const centerOffset = -0.5 * (textGeometry.boundingBox.max.x - textGeometry.boundingBox.min.x);
        textMesh.position.set(centerOffset, 0, 0);
    
        scene.add(textMesh);
    });
    
    // Animation Loop
    function animate() {
        requestAnimationFrame(animate);
    
        controls.update();
        renderer.render(scene, camera);
    }
    animate();
    
}

// === COUNTDOWN TIMER FUNCTIONALITY ===
function startCountdown(targetDate) {
    const countdownElement = document.getElementById("countdown");

    function updateCountdown() {
        const now = new Date().getTime();
        const countdownDate = new Date(targetDate).getTime();
        const difference = countdownDate - now;

        if (difference < 0) {
            countdownElement.innerHTML = "Time's up!";
            return;
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    // Update countdown every second
    setInterval(updateCountdown, 1000);
    updateCountdown(); // Call once immediately
}
