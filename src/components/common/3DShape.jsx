import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import * as THREE from 'three';

const ShapeContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
`;

const Shape3D = ({ type = 'sphere', color = '#2997FF', position = { x: 0, y: 0, z: -5 } }) => {
  const containerRef = useRef();
  const sceneRef = useRef();
  const cameraRef = useRef();
  const rendererRef = useRef();
  const shapeRef = useRef();

  useEffect(() => {
    // Scene setup
    sceneRef.current = new THREE.Scene();
    
    // Camera setup
    const aspect = window.innerWidth / window.innerHeight;
    cameraRef.current = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
    cameraRef.current.position.z = 5;

    // Renderer setup
    rendererRef.current = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    rendererRef.current.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(rendererRef.current.domElement);

    // Shape creation
    let geometry;
    switch (type) {
      case 'cube':
        geometry = new THREE.BoxGeometry(2, 2, 2);
        break;
      case 'torus':
        geometry = new THREE.TorusGeometry(1, 0.3, 16, 100);
        break;
      default:
        geometry = new THREE.SphereGeometry(1, 32, 32);
    }

    const material = new THREE.MeshPhongMaterial({
      color: new THREE.Color(color),
      transparent: true,
      opacity: 0.8,
      wireframe: true
    });

    shapeRef.current = new THREE.Mesh(geometry, material);
    shapeRef.current.position.set(position.x, position.y, position.z);
    sceneRef.current.add(shapeRef.current);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    sceneRef.current.add(ambientLight, pointLight);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      if (shapeRef.current) {
        shapeRef.current.rotation.x += 0.005;
        shapeRef.current.rotation.y += 0.005;
      }

      rendererRef.current.render(sceneRef.current, cameraRef.current);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();

      rendererRef.current.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      if (geometry) geometry.dispose();
      if (material) material.dispose();
    };
  }, [type, color, position]);

  return <ShapeContainer ref={containerRef} />;
};

export default Shape3D; 