import { Canvas } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";
import Model from "./models/model";
import { Environment, OrbitControls } from "@react-three/drei";

export default function LootCanvas() {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <Model />
        <OrbitControls />
        <Environment preset="sunset" background />
      </Suspense>
    </Canvas>
  );
}
