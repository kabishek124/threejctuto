import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { CircleGeometry } from 'three';

function Box() {
  const mesh = useRef();

  // Rotate the cube on each frame
  useFrame(() => {
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
  });

  return (
    <>
      <mesh ref={mesh}>
        <boxGeometry args={[1,1,5]} />
        <meshStandardMaterial color="green" />
      </mesh>
    </>
  );
}

function Circle() {
  const mesh = useRef();

  <mesh ref={mesh}>
    <planeGeometry args={[2,4]}/>
  </mesh>
}

function App() {
  return (
    <Canvas style={{padding: '10px', margin: '10px'}}>
      <ambientLight intensity={0.5} />
      <pointLight position={[100, 10, 10]} />
      <Box />
    </Canvas>
  );
}


export default App;
