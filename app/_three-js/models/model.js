import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/Poimandres.gltf");
  return (
    <>
      <ambientLight intensity={0} />
      <directionalLight position={[1, 0.25, 1]} color={[0x00fffc, 0.3]} />
      <group ref={group} {...props} dispose={null} scale={0.4}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve007_1.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve007_2.geometry}
          material={materials["Material.002"]}
        />
      </group>
    </>
  );
}

useGLTF.preload("/Poimandres.gltf");
