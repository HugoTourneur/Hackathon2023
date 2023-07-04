import { useCallback } from "react"
import { useForm } from "react-hook-form"

const RegisterForm = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit = useCallback(async (values) => {
    const {email, password} = values
    try {
      const rep = await axios.post(
        "/api/sign-up",
        JSON.stringify({ email, password })
      )
        alert(rep)
     }
    catch (err) {
      console.log("error register : " + err)
    }
    
    window.location.pathname = "/"
  })

  return (
    <div className="flex justify-center">
      <form className="flex flex-col gap-4 w-3/12" onSubmit={handleSubmit(onSubmit)} noValidate>
        <label className="flex flex-col">
          First name:
          <input {...register("firstName")} className="border-2" />
        </label>
        <label className="flex flex-col">
          Last name:
          <input {...register("lastName")} className="border-2"/>
        </label>
        <label className="flex flex-col">
          Email:
          <input {...register("email")} className="border-2"/>
        </label>
        <label className="flex flex-col">
          password
          <input {...register("password")} className="border-2"/>
        </label>
        <input type="submit" value="submit" className="bg-blue-500"/>
        </form>
      </div>
  )

}

export default RegisterForm