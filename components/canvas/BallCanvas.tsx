"use client";
import { OrbitControls } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import React, { Suspense } from "react";
import CanvasLoader from "./CanvasLoader";

export const BallCanvas = ({ img }: { img: string }) => {
  return (
    <div>
      <Canvas>
        <ambientLight intensity={2} />
        <directionalLight position={[2, 1, 1]} />
        <OrbitControls
          autoRotate
          autoRotateSpeed={8}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Suspense fallback={<CanvasLoader />}>
          <Ball img2={img} />
        </Suspense>
      </Canvas>
    </div>
  );
};

function Ball({ img2 }: { img2: string }) {
  const texture_1 = useLoader(TextureLoader, img2);
  return (
    <mesh>
      <boxGeometry args={[2.5, 2.5, 2.5]} />
      <meshStandardMaterial map={texture_1} />
    </mesh>
  );
}
