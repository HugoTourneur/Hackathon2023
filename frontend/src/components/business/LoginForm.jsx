import api from "@/utils/api"
import { useCallback } from "react"
import { useForm } from "react-hook-form"

const LoginForm = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit = useCallback(async (values) => {
    const { email, password } = values
    try {
      const { data } = await api.post("/sign-in", {
        email: email,
        password: password,
      })
      console.log(data)
      window.location.pathname = "/"
    } catch (err) {
      console.log("error register : " + err)
    }
  })

  return (
    <div className="flex justify-center">
      <form
        className="flex flex-col gap-4 w-3/12"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <label className="flex flex-col">
          Email:
          <input {...register("email")} className="border-2" />
        </label>
        <label className="flex flex-col">
          password
          <input
            {...register("password")}
            type="password"
            className="border-2"
          />
        </label>
        <input type="submit" value="Login" className="bg-blue-500" />
      </form>
    </div>
  )
}

export default LoginForm
