'use client'

import Link from 'next/link'

export default function ElementNavbar({ symbol, name, type, selected, path }) {

    const isSelected = selected === name

    const typeElementBg = {
        TransitionMetal: `${isSelected ? "bg-pink-700" : "bg-gray-400"} hover:bg-pink-700`,
        BasicMetal: `${isSelected ? "bg-cyan-700" : "bg-gray-400"} hover:bg-cyan-700`
    }

    return (
        <Link
            onClick={() => console.log('ElementNavbar clicked')}
            href={`/${path}/${name}`}
            className={`flex flex-col w-full max-w-[7rem] h-full text-center rounded-md border-[1.6px] pt-2 pb-2 border-black gap-2 cursor-pointer transition-all ${typeElementBg[type]}`}
        >
            <p className="text-base md:text-xl"><strong>{symbol}</strong></p>
            <p className="text-base md:text-xl">{name}</p>
        </Link>
    )

}