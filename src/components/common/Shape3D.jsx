import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import * as THREE from 'three';

const ShapeContainer = styled.div`
  width: 100%;
  height: 100%;
  canvas {
    width: 100% !important;
    height: 100% !important;
  }
`;

const Shape3D = ({ type = 'sphere', color = '#2997FF', position = { x: 0, y: 0, z: -5 } }) => {
  const containerRef = useRef();
  const sceneRef = useRef();
  const cameraRef = useRef();
  const rendererRef = useRef();
  const geometryRef = useRef();
  const materialRef = useRef();
  const meshRef = useRef();

  useEffect(() => {
    // Scene setup
    sceneRef.current = new THREE.Scene();
    
    // Camera setup
    const aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
    cameraRef.current = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
    cameraRef.current.position.z = 5;

    // Renderer setup
    rendererRef.current = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    rendererRef.current.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    rendererRef.current.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(rendererRef.current.domElement);

    // Create geometry based on type
    switch (type) {
      case 'sphere':
        geometryRef.current = new THREE.SphereGeometry(1, 32, 32);
        break;
      case 'cube':
        geometryRef.current = new THREE.BoxGeometry(1.5, 1.5, 1.5);
        break;
      case 'torus':
        geometryRef.current = new THREE.TorusGeometry(1, 0.3, 16, 100);
        break;
      default:
        geometryRef.current = new THREE.SphereGeometry(1, 32, 32);
    }

    // Material setup
    materialRef.current = new THREE.MeshPhongMaterial({
      color: new THREE.Color(color),
      transparent: true,
      opacity: 0.8,
      wireframe: true
    });

    // Mesh setup
    meshRef.current = new THREE.Mesh(geometryRef.current, materialRef.current);
    meshRef.current.position.set(position.x, position.y, position.z);
    sceneRef.current.add(meshRef.current);

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    sceneRef.current.add(ambientLight, pointLight);

    // Animation function
    const animate = () => {
      requestAnimationFrame(animate);
      
      if (meshRef.current) {
        meshRef.current.rotation.x += 0.005;
        meshRef.current.rotation.y += 0.005;
      }

      rendererRef.current.render(sceneRef.current, cameraRef.current);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

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

      if (geometryRef.current) geometryRef.current.dispose();
      if (materialRef.current) materialRef.current.dispose();
      if (rendererRef.current) rendererRef.current.dispose();
    };
  }, [type, color, position]);

  return <ShapeContainer ref={containerRef} />;
};

export default Shape3D; 