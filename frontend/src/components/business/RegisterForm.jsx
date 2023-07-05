import axios from "axios"
import { useCallback } from "react"
import { useForm } from "react-hook-form"

const RegisterForm = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit = useCallback(async (values) => {
    const {email, password} = values
    try {
      const {data} = await axios.post(
        "http://localhost:3001/api/sign-up",
        { email: email, password: password }
      )
      console.log(data)
      window.location.pathname = "/"
     }
    catch (err) {
      console.log("error register : " + err)
    }
  })

  return (
    <div className="flex justify-center ">
      <form className="flex flex-col gap-4 w-3/12 bg-[#B6A6CA] py-2 border-2 border-black" onSubmit={handleSubmit(onSubmit)} noValidate>
        <label className="flex flex-col mx-2">
          First name:
          <input {...register("firstName")} className="border-2" />
        </label>
        <label className="flex flex-col mx-2">
          Last name:
          <input {...register("lastName")} className="border-2"/>
        </label>
        <label className="flex flex-col mx-2">
          Email:
          <input {...register("email")} className="border-2"/>
        </label>
        <label className="flex flex-col mx-2">
          password
          <input {...register("password")} type="password" className="border-2"/>
        </label>
        <input type="submit" value="SUBMIT" className="bg-[#A09ABC] mx-2 rounded-md"/>
        </form>
      </div>
  )

}

export default RegisterForm