import { View, Text } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
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
function ShoeTutorial() {
    const loadfile = require('@/assets/models/shoe.obj')
    console.log(loadfile)
    const helloAsset = useAssets(loadfile);
    console.log(helloAsset[0])

    const obj = new OBJLoader();
    const gltf = new OBJLoader();
    if (helloAsset[0])
        obj.load(helloAsset[0][0].localUri!,
            (data) => {
                console.log(data)
            },
            (xhr) => {
                console.log((xhr.loaded / xhr.total * 100) + '% loaded');
            },
            (error) => {
                console.log(error, 'An error happened')
            }
        )
    return (
        <mesh>
            <boxGeometry></boxGeometry>
            {/* <primitive object={{ obj }} scole={10} /> */}
        </mesh>
    )
}
export default function CanvasTutorial() {
    return (
        <View style={{ flex: 1 }}>
            <Text style={{ flex: 0.5, color: "#fff" }}>CanvasTutorial</Text>
            <Canvas style={{ flex: 1 }}>
                <ambientLight intensity={1} color={'#fff'} />
                {/* <BoxTutorial /> */}
                <ShoeTutorial />
            </Canvas>
        </View>
    )
}