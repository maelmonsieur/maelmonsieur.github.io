import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { Environment } from '@react-three/drei';

import { Model } from "./Model";

export default function DeLa3D(props) {

    return(
    <Canvas className="canvas" style={{position: "absolute", zIndex: "99"}}>

        {/* max et min : pour bloquer la rotation sur l'axe horizontal */}
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2} />
        <Environment preset="dawn"/>
        <Suspense fallback={null}>
            <Model scale={0.7}/>
        </Suspense>
    </Canvas>
  )
}