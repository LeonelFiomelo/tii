import Link from "next/link"
import Image from "next/image"
import ImageCube from "../../public/cube.png"
import ImageCamera from "../../public/camera.png"

export default function Button({name, image, path}) {

    const img = {
        element: ImageCube,
        camera: ImageCamera
    }

    return (
        <Link href={`/${path}`} className="flex flex-col justify-center items-center w-[8rem] rounded-lg p-2 gap-4 transition-all bg-blue-800 hover:bg-blue-600">
            <p className="text-white text-lg">{name}</p>
            <Image src={img[image]} width={80} height={80} />
        </Link>
    )
}