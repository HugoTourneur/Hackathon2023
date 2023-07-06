import DisplayItem from "@/components/DisplayItem"
import Layout from "@/components/Layout"
import api from "@/utils/api"
import { cookies } from "next/dist/client/components/headers"
import { useEffect, useState } from "react"

const Estates = () => {
  const [products, setProducts] = useState(null)
  const [cookieStore, setCookieStore] = useState(null)

  useEffect(() => {
    setCookieStore(document.cookie)
  })

  useEffect(() => {
    ;(async () => {
      try {
        const { data } = await api.get("/estates")
        setProducts(data)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  return (
    <Layout isAuthenticated={cookieStore}>
      <div className="grid grid-cols-3 gap-8">
        {products &&
          products.map((product) => (
            <DisplayItem
              key={product.id}
              title={product.title}
              location={product.location}
              value={product.value}
              date={"2023-12-01"}
              image={product.image}
              id={product.id}
            />
          ))}
      </div>
    </Layout>
  )
}

export default Estates
