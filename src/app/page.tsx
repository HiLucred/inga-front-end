import Image from 'next/image'
import triangle from '../../public/triangle.svg'
import { Button } from '@/components/Button'

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center mt-20">
      <div className="flex items-center justify-center mb-20">
        <h1 className="text-8xl md:text-9xl font-extrabold bg-gradient-to-tr from-blue-600 to-red-600 text-transparent bg-clip-text">
          ING
        </h1>
        <Image src={triangle} alt="" width={108} />
      </div>

      <div className="flex flex-col items-center mb-16">
        <h1 className="text-white text-4xl font-extrabold leading-none text-center sm:text-6xl 2xl:text-7xl">
          Sua
          <span className="bg-gradient-to-tr from-purple-600 to-red-500 text-transparent bg-clip-text">
            {' '}
            comunidade de jogos
          </span>
        </h1>

        <h2 className="mt-4 text-lg font-bold text-white text-center sm:text-4xl 2xl:text-5xl ">
          Feito <span className="underline">por</span> artistas independentes.
          <br />
          <span className="underline">Para</span> artistas independentes.
        </h2>
      </div>

      <div className="flex flex-col gap-4 md:flex-row">
        <Button type="button">EXPLORAR</Button>
        <Button type="button">CRIAR UMA CONTA</Button>
      </div>
    </div>
  )
}
