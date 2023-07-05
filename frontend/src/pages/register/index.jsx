import RegisterForm from "@/components/business/RegisterForm"
import Layout from "@/components/Layout"

const RegisterPage = (props) => {

  const {isAuthenticated} = props

  return (
    <>
      <Layout/>
      <RegisterForm />
    </>
  )
}

export default RegisterPage