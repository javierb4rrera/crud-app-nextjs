import Image from "next/image"
import Link from "next/link"

function Header() {
  return (
    <header className="bg-[#343a46]">
      <div className="p-4 flex justify-around items-center mb-4 max-w-[720px] mx-auto">
      <Link href="/" className="flex gap-x-1 justify-center items-center">
      <h1 className="text-yellow-300 font-extrabold text-3xl">
        Task&apos;s
      </h1>
      <Image src="/goat.png" alt="cabra" width="50" height="60"/>
      </Link>
      <Link href="/new" className="bg-green-600 px-3 py-2 rounded-sm font-bold  text-sm hover:bg-green-800">
        New task
      </Link>
      </div>
    </header>
  )
}

export default Header