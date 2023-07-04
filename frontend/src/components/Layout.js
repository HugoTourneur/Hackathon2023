import Image from "next/image"
import Link from "next/link"

const Layout = ({ children, isAuthenticated }) => {
  const handleClick = () => {
    // SIGN-OUT FUNCTION
  }

  return (
    <div>
      <nav className="flex justify-between mx-auto py-4 px-8 border-b-2">
        <Image href="" alt="logo" />
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
      <div>{children}</div>
    </div>
  )
}

export default Layout
