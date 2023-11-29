'use client'

import React, {useState, useEffect} from "react"
import { ARCanvas, ARMarker } from "@artcom/react-three-arjs";
import { Canvas, useFrame } from '@react-three/fiber'
import GetData from "@/server/server";
import Cube from "@/components/Cube";
import Thermometer from "@/components/Thermometer";

export default function Page({params}) {

    const name = decodeURIComponent(params.name);

    const [dataArduino, setdataArduino] = useState({
        volts: 0
    })

    const [temperature, setTemperature] = useState()
    
    useEffect ( () => {
        const fetchData = async () => {
            try {
                const data = await GetData()
                setdataArduino(data)
                setTemperature(Math.round(data.volts*250))
            } catch (error) {
                console.error('Error al obtener los datos:', error)
            }
        }
        const intervalId = setInterval(fetchData, 1000);
        return () => clearInterval(intervalId);
    }, [])

    return (
        <div className="flex justify-center items-center w-screen h-screen bg-slate-950">
            <section className='absolute top-10 w-full pl-10 pr-10'>
                <Thermometer temperature={temperature} />
            </section>
            <div className="w-40 h-40">
                <Canvas>
                    <Cube name={name} temperature={temperature} />
                </Canvas>
            </div>
        </div>
        // <ARCanvas
        //     arEnabled
        //     patternRatio={0.5}
        //     detectionMode="mono_and_matrix"
        //     cameraParametersUrl="/data/camera_para.dat"
        //     matrixCodeType="3x3"
        //     sourceType="webcam"
        //     camera={ { position: [0, 0, 0] } }
        //     onCreated={ ({ gl }) => {
        //         gl.setSize(window.innerWidth, window.innerHeight)
        //     } }
        // >
        
        //     <ambientLight />
            
        //     <pointLight position={[10, 10, 10]} />
            
        //     <ARMarker
        //         type={"pattern"}
        //         patternUrl={"/data/markers/patt.hiro"}
        //         onMarkerFound={() => { console.log("Marker Found") }}
        //     >

        //         <Cube name={'Cobre'} temperature={Math.round(dataArduino.volts)} />

        //     </ARMarker>
        
        // </ARCanvas>
    )
}