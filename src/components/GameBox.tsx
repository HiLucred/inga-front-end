import Image, { StaticImageData } from 'next/image'

interface GameBoxProps {
  title: string
  cover: StaticImageData
}

export function GameBox({ title, cover }: GameBoxProps) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-white text-sm font-bold">{title}</h2>

      <Image src={cover} alt={`Jogo ${title}`} />

      <div className="flex items-center justify-between">
        <div className="p-2 flex gap-3 border border-gray-700 text-white">
          <button>
            <span>💜</span>
          </button>
          <button>
            <span>23</span>
          </button>
        </div>

        <div className="p-2 flex gap-3 border border-gray-700 text-white">
          <button>
            <span>👍🏼</span>
          </button>
          <button>
            <span>23</span>
          </button>
        </div>

        <div className="p-2 flex gap-3 border border-gray-700 text-white">
          <button>
            <span>💬</span>
          </button>
          <button>
            <span>23</span>
          </button>
        </div>
      </div>
    </div>
  )
}
