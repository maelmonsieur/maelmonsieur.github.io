import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { Environment } from '@react-three/drei';
import { useMediaQuery } from 'react-responsive'

import { Model } from "./Model";

export default function DeLa3D(props) {

    const isPhone = useMediaQuery({ query: '(max-width: 1000px)' })

    return(
    <Canvas className="canvas" style={{position: "absolute", zIndex: "99"}}>

        {/* max et min : pour bloquer la rotation sur l'axe horizontal */}
        {!isPhone && <OrbitControls enablePan={false} enableZoom={false} maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2} />}
        <Environment preset="dawn"/>
        <Suspense fallback={null}>
            <Model scale={isPhone ? 0.4 : 0.7}/>
        </Suspense>
    </Canvas>
  )
}