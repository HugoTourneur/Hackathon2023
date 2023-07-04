import Link from "next/link"
import { HomeModernIcon } from "@heroicons/react/24/outline"

const Layout = ({ children, isAuthenticated }) => {
  const handleClick = () => {
    // SIGN-OUT FUNCTION
  }

  return (
    <div>
      <div className="bg-[#B6A6CA]">
        <nav className="flex justify-between max-w-5xl mx-auto py-4 ">
          <div className="flex items-center gap-2">
            <HomeModernIcon className="w-6" />
            <span>Jed'Immo</span>
          </div>
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
      <div className="max-w-5xl mx-auto mt-4">{children}</div>
    </div>
  )
}

export default Layout
