import LoginForm from "@/components/business/LoginForm"
import Layout from "@/components/Layout"

const LoginPage = (props) => {
  const { isAuthenticated } = props

  return (
    <>
      <Layout />
      <LoginForm />
    </>
  )
}

export default LoginPage
