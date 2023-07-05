import Link from "next/link"
import { HomeModernIcon } from "@heroicons/react/24/outline"
import { useRouter } from "next/router"

const Layout = ({ children, isAuthenticated }) => {
  const router = useRouter()

  const handleClick = () => {
    // SIGN-OUT FUNCTION
  }

  return (
    <div>
      <div className="bg-[#B6A6CA]">
        <nav className="flex justify-between max-w-5xl mx-auto py-4 ">
          <button onClick={() => router.push("/")}>
            <div className="flex items-center gap-2">
              <HomeModernIcon className="w-6" />
              <span>Jed'Immo</span>
            </div>
          </button>
          <ul className="flex gap-4">
            {isAuthenticated ? (
              <button onClick={handleClick}>Sign-out</button>
            ) : (
              <>
                <Link href="/sign-in">Sign-in</Link>
                <Link href="/sign-up">Sign-up</Link>
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
