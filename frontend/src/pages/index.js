import Layout from "@/components/Layout"

export const GetServerSideProps = async (context) => {
  const { req } = context
  console.log("here")
  console.log(req)
}

const Home = () => {
  return <Layout />
}

export default Home
