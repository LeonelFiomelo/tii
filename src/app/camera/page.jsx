'use client'

import Element from "@/components/Element";

export default function Camera() {

    return (
        <main className="flex flex-col h-screen w-screen items-center justify-around bg-slate-950">
            <section>
                <h1 className='text-4xl text-white'>Seleccione un Metal</h1>
            </section>
            <section className='flex md:flex-col w-full gap-4'>
                <article className='flex flex-col md:flex-row justify-center items-end w-full gap-4'>
                    <Element number={13} symbol={'Al'} name={'Aluminio'} weight={26.9815} type={'BasicMetal'} path={'camera'}/>
                    <Element number={50} symbol={'Sn'} name={'Estaño'} weight={118.71} type={'BasicMetal'} path={'camera'}/>
                    <Element number={82} symbol={'Pb'} name={'Plomo'} weight={207.21} type={'BasicMetal'} path={'camera'}/>
                </article>
                <article className='flex flex-col md:flex-row justify-center items-start w-full gap-4'>
                    <Element number={29} symbol={'Cu'} name={'Cobre'} weight={63.5463} type={'TransitionMetal'} path={'camera'}/>
                    <Element number={30} symbol={'Zn'} name={'Zinc'} weight={65.382} type={'TransitionMetal'} path={'camera'}/>
                    <Element number={47} symbol={'Ag'} name={'Plata'} weight={107.868} type={'TransitionMetal'} path={'camera'}/>
                </article>
            </section>
            <section className='flex flex-col gap-4'>
                <article className='flex gap-4'>
                    <div className='w-7 h-7 rounded-full bg-pink-700'></div>
                    <p className='text-xl text-white'>Metal Básico</p>
                </article>
                <article className='flex gap-4'>
                    <div className='w-7 h-7 rounded-full bg-cyan-700'></div>
                    <p className='text-xl text-white'>Metal Transitorio</p>
                </article>
            </section>
        </main>
    )

}