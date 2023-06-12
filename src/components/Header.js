import Link from "next/link"

/**
 <Image src="/goat.png" alt="cabra" width="60" height="60"/>
 */

function Header() {
  return (
    <header className="p-5">
      <h1 className="text-yellow-300 font-bold text-5xl">
        Task App
      </h1>
      <div className="flex gap-x-5 text-xl">
        <Link href="/">
          Home
        </Link>
        <Link href="/about">
          About
        </Link>
        <Link href="/new">
          New
        </Link>
      </div>
    </header>
  )
}

export default Header