import { useGLTF } from "@react-three/drei";

export function Model() {
  const { nodes, materials } = useGLTF("/scene.gltf");
  return (
    <div>
      <></>
    </div>
  );
}
