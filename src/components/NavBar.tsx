import { Menu } from 'lucide-react'
import Image from 'next/image'
import logo from '../../public/logo.svg'

export function NavBar() {
  return (
    <nav className="w-full h-16 bg-black border-b border-gray-700 text-white flex items-center justify-between px-6">
      <Image src={logo} alt="Logo" className="mt-3" />

      <button>
        <Menu size={32} />
      </button>
    </nav>
  )
}
