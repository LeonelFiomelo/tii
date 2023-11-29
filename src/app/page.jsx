'use client'

import Button from "@/components/Button"

export default function Home() {

  return (
    <main className="flex flex-col min-h-screen items-center justify-center gap-8 bg-slate-950">
      <h1 className="text-lg md:text-4xl text-white">Tecnología de Interfaces Interactivas</h1>
      <h2 className="text-base md:text-2xl text-white">Seleccione una opción</h2>
      <section className="flex justify-center items-center gap-6">
        <Button name={'Marcadores'} path={'element'} image={'element'}/>
        <Button name={'Cámara'} path={'camera'} image={'camera'}/>
      </section>
    </main>
  )

}
