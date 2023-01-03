import "./style.css";
import {
  AmbientLight,
  BoxGeometry,
  // GridHelper,
  MathUtils,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  PerspectiveCamera,
  PointLight,
  // PointLightHelper,
  Scene,
  SphereGeometry,
  TextureLoader,
  TorusGeometry,
  WebGLRenderer,
} from "three";
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Setup

const scene = new Scene();

const camera = new PerspectiveCamera(
  75,
  screen.width / screen.height,
  0.1,
  1000
);

const renderer = new WebGLRenderer({
  canvas: document.querySelector("#bg"),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(screen.width, screen.height);
camera.position.setZ(30);
camera.position.setX(-3);

renderer.render(scene, camera);

// Torus

const geometry = new TorusGeometry(10, 3, 16, 100);
const material = new MeshStandardMaterial({ color: 0x1b98f2 });
const torus = new Mesh(geometry, material);

scene.add(torus);

// Lights

const pointLight = new PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

// Helpers

// const lightHelper = new PointLightHelper(pointLight)
// const gridHelper = new GridHelper(200, 50);
// scene.add(lightHelper, gridHelper)

// const controls = new OrbitControls(camera, renderer.domElement);

function addStar() {
  const geometry = new SphereGeometry(0.25, 24, 24);
  const material = new MeshStandardMaterial({ color: 0xffffff });
  const star = new Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);
  scene.add(star);
}

Array(200).fill().forEach(addStar);

// Background

import spaceImgUrl from "./space.webp";
const spaceTexture = new TextureLoader().load(spaceImgUrl);
scene.background = spaceTexture;

// Avatar

import jorgeImgUrl from "./jorge.webp";
const jorgeTexture = new TextureLoader().load(jorgeImgUrl);

const jorge = new Mesh(
  new BoxGeometry(3, 3, 3),
  new MeshBasicMaterial({ map: jorgeTexture })
);

scene.add(jorge);

// Moon

import moonImgUrl from "./moon.jpg";
const moonTexture = new TextureLoader().load(moonImgUrl);
import normalImgUrl from "./normal.jpg";
const normalTexture = new TextureLoader().load(normalImgUrl);

const moon = new Mesh(
  new SphereGeometry(3, 32, 32),
  new MeshStandardMaterial({
    map: moonTexture,
    normalMap: normalTexture,
  })
);

scene.add(moon);

moon.position.z = 30;
moon.position.setX(-10);

jorge.position.z = -5;
jorge.position.x = 2;

// Scroll Animation

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  moon.rotation.x += 0.05;
  moon.rotation.y += 0.075;
  moon.rotation.z += 0.05;

  jorge.rotation.y += 0.01;
  jorge.rotation.z += 0.01;

  camera.position.z = t * -0.01;
  camera.position.x = t * -0.0002;
  camera.rotation.y = t * -0.0002;
}

document.body.onscroll = moveCamera;
moveCamera();

// Animation Loop

function animate() {
  requestAnimationFrame(animate);

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;

  moon.rotation.x += 0.005;

  // controls.update();

  renderer.render(scene, camera);
}

animate();
