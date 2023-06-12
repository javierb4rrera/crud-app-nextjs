import Image from "next/image"
import Link from "next/link"

/**
 <Image src="/goat.png" alt="cabra" width="60" height="60"/>
 */

function Header() {
  return (
    <header className="p-4 flex justify-around items-center cursor-pointer">
      <Link href="/" className="flex gap-x-1">
      <h1 className="text-yellow-300 font-extrabold text-5xl">
        ToDo&apos;s
      </h1>
      <Image src="/goat.png" alt="cabra" width="60" height="60"/>
      </Link>
      <Link href="/new" className="bg-green-600 px-5 py-2 rounded-sm font-bold hover:bg-green-800">
        New task
      </Link>
    </header>
  )
}

export default Header