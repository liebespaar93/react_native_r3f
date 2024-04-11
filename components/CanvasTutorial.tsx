import { View, Text } from 'react-native'
import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber/native'
import { Group, Mesh, Object3DEventMap } from 'three'


function BoxTutorial() {
    const [active, setActive] = useState(false);

    const boxRef = useRef<Mesh>(new Mesh)

    useFrame((state, delte) => {
        boxRef.current.rotation.x += delte
        boxRef.current.rotation.y += delte
    })
    return (
        <mesh ref={boxRef} scale={active ? 2 : 1}
            onClick={(e) => { setActive(!active) }}
        >
            <boxGeometry></boxGeometry>
            <meshStandardMaterial color={active ? '#00ff00' : "#acacac"} />
            {/* <meshStandardMaterial color={active ? 'green' : 'gray'} /> */}
        </mesh >
    )
}

import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useAssets } from 'expo-asset';
import { OrbitControls, useGLTF } from '@react-three/drei/native';
import { color } from 'three/examples/jsm/nodes/shadernode/ShaderNode';
import { ShoeModel } from './ShoeModel';


function ShoeTutorial() {
    return (
        <ShoeModel></ShoeModel>
    )
}
export default function CanvasTutorial() {
    return (
        <View style={{ width: 400, height: 400 }}>
            <Text style={{ flex: 0.5, color: "#fff" }}>CanvasTutorial</Text>
            <Canvas style={{ flex: 1, backgroundColor: '#000' }}>
                <ambientLight intensity={1} color={'#fff'} />
                <spotLight position={[0, 2, 1]} intensity={10}></spotLight>
                <Suspense fallback={null}>
                    <ShoeTutorial />
                </Suspense>
            </Canvas>
        </View>
    )
}