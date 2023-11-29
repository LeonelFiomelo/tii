'use client'

import { useState } from "react"
import ElementNavbar from "@/components/ElementNavbar"

export default function Layout({children, params}) {

    const [selected, setSelected] = useState(decodeURIComponent(params.name))

    return (
        <div className="relative">
            <div className="flex flex-col md:flex-row row-span-3 w-full h-auto justify-evenly gap-2 md:gap-8 mt-4 absolute z-10">
                <div className="flex w-full justify-center md:justify-end items-center gap-2 md:gap-8">
                    <ElementNavbar symbol={'Al'} name={'Aluminio'} type={'BasicMetal'} selected={selected} path={'element'}/>
                    <ElementNavbar symbol={'Sn'} name={'Estaño'} type={'BasicMetal'} selected={selected} path={'element'}/>
                    <ElementNavbar symbol={'Pb'} name={'Plomo'} type={'BasicMetal'} selected={selected} path={'element'}/>
                </div>
                <div className="flex w-full justify-center md:justify-start items-center gap-2 md:gap-8">
                    <ElementNavbar symbol={'Ag'} name={'Plata'} type={'TransitionMetal'} selected={selected} path={'element'}/>
                    <ElementNavbar symbol={'Cu'} name={'Cobre'} type={'TransitionMetal'} selected={selected} path={'element'}/>
                    <ElementNavbar symbol={'Zn'} name={'Zinc'} type={'TransitionMetal'} selected={selected} path={'element'}/>
                </div>
            </div>
            {children}
        </div>
    )
}