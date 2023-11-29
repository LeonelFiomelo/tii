'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Canvas, useFrame } from '@react-three/fiber'
import Cube from '@/components/Cube'
import MarkerAl from '../../../../public/Aluminio.png'
import MarkerCu from '../../../../public/Cobre.png'
import MarkerZn from '../../../../public/Zinc.png'
import MarkerAg from '../../../../public/Plata.png'
import MarkerSn from '../../../../public/Estaño.png'
import MarkerPb from '../../../../public/Plomo.png'
import GetData from '@/server/server'
import Thermometer from '@/components/Thermometer'

export default function Page({ params }) {

    const ImageMarker = {
      Aluminio: MarkerAl,
      Cobre: MarkerCu,
      Zinc: MarkerZn,
      Plata: MarkerAg,
      Estaño: MarkerSn,
      Plomo: MarkerPb,
    }

    const [dataArduino, setdataArduino] = useState({
      volts: 0
    })
  
    useEffect ( () => {
      const fetchData = async () => {
        try {
          const data = await GetData()
          setdataArduino(data)
        } catch (error) {
          console.error('Error al obtener los datos:', error)
        }
      }
      const intervalId = setInterval(fetchData, 1000);
      return () => clearInterval(intervalId);
    }, [])

    return (
      <main className='flex relative h-screen items-center justify-center gap-8 bg-slate-950'>

        <section className='flex flex-col h-screen items-center justify-center gap-6'>
          <h1 className='text-xl text-white'><strong>{decodeURIComponent(params.name)}</strong></h1>
          <Image src={ImageMarker[decodeURIComponent(params.name)]} width={300} height={300} />
          {/* <Canvas className='w-20 h-20'>
            <Cube name={decodeURIComponent(params.name)} temperature={dataArduino.volts} />
          </Canvas> */}
        </section>

        <section className='absolute bottom-10 w-full pl-10 pr-10'>
          <Thermometer temperature={Math.round(dataArduino.volts * 250)} />
        </section>

      </main>
    )

}