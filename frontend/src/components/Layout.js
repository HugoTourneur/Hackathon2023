import Link from "next/link"
import { HomeModernIcon } from "@heroicons/react/24/outline"
import { useRouter } from "next/router"
import Image from "next/image"
import axios from "axios"

const Layout = ({ children, isAuthenticated }) => {
  const router = useRouter()

  const handleClick = async () => {
    try {
      await axios.get("http://localhost:3001/api/sign-out")
      router.push("/estates")
    } catch (error) {
      return
    }
  }

  return (
    <div>
      <div className="bg-[#B6A6CA]">
        <nav className="flex justify-between max-w-5xl mx-auto py-4 items-center ">
          <Link href={"/estates"}>
            <div className="flex items-center gap-2">
              <Image
                width={500}
                height={500}
                src={"/logo.png"}
                alt="logo"
                className="w-8 h-8 bg-black p-1.5 rounded-full"
              />
              <span className="font-semibold text-xl">Pixel Found</span>
            </div>
          </Link>

          <ul className="flex gap-4">
            {isAuthenticated ? (
              <button onClick={handleClick}>Sign-out</button>
            ) : (
              <>
                <Link href="/login">Sign-in</Link>
                <Link href="/register">Sign-up</Link>
              </>
            )}
          </ul>
        </nav>
      </div>
      <div className="max-w-5xl mx-auto my-8">{children}</div>
    </div>
  )
}

export default Layout
