import { HomeModernIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

const Layout = ({ children, isAuthenticated }) => {
  const handleClick = () => {
    // SIGN-OUT FUNCTION
  }

  return (
    <div>
      <div className="border-b-2">
        <nav className="flex justify-between max-w-5xl mx-auto py-4 ">
          <Link href={"/"} className="flex items-center gap-2">
            <HomeModernIcon className="w-6" />
            <span>Jed'Immo</span>
          </Link>
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
