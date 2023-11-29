'use client'

import { useState, useEffect } from 'react';

export default function Thermometer({ temperature }) {

    const [ancho, setAncho] = useState(0);
    const [color, setColor] = useState('#FAD02E');

    useEffect(() => {
        const escala = 1; // Ajusta la escala según tus necesidades
        const limiteSuperior = 1250; // Temperatura máxima posible
        const nuevaAltura = (temperature / limiteSuperior) * escala * 100;
        setAncho(nuevaAltura);
    
        // Mapea la temperatura a un color en la escala de amarillo a rojo
        const nuevoColor = `rgb(${255 - (temperature / limiteSuperior) * 255}, 100, 0)`;
        setColor(nuevoColor);
      }, [temperature]);

    return (
        <div className='flex flex-col justify-center items-center gap-4'>
            <p className='text-xl text-white'>{temperature}° C</p>
            <div className="h-5 w-full rounded-xl bg-gray-200 relative">
                <div
                    className="rounded-xl absolute left-0 h-full transition-all duration-500"
                    style={{
                        width: `${ancho}%`,
                        background: `linear-gradient(to right, #FAD02E, #FFA500, #FF0000)`,
                    }}
                ></div>
            </div>
        </div>
    )
}