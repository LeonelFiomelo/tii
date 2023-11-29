import Link from 'next/link'

export default function Element({number, symbol, name, weight, type, path}) {

    const typeElementBg = {
        TransitionMetal: 'bg-pink-700 hover:bg-pink-600',
        BasicMetal: 'bg-cyan-700 hover:bg-cyan-600'
    }

    return (
        <Link
            href={`/${path}/${name}`}
            className={`flex flex-col max-w-[8rem] w-full h-full text-center rounded-md border-[1.6px] border-black p-3 gap-2 cursor-pointer transition-all ${typeElementBg[type]}`}
        >
            <p>{number}</p>
            <p className="text-2xl"><strong>{symbol}</strong></p>
            <p>{name}</p>
            <p>{weight}</p>
        </Link >
    )

}