import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'

function Box() {
  return (
    <mesh position={[0,2,0]} >
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="hotpink" />
    </mesh>
  )
}

function Plane() {
  return (
    <mesh position={[0,0,0]} rotation={[-Math.PI / 2,0,0]}>
      <planeBufferGeometry attach="geometry" args={[100,100]} />
      <meshLambertMaterial attach="material" color="blue" />
    </mesh>
  )
}

function App() {
  return (
    <Canvas>
      <OrbitControls />
      <Stars />
      <ambientLight intensity={0.5} />
      <spotLight 
        position={[10,15,10]}
        angle={0.3}
      />
      <Box />
      <Plane />
    </Canvas>
  );
}

export default App;
