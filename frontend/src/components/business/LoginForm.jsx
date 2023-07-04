import { useCallback } from "react"
import { useForm } from "react-hook-form"

const LoginForm = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit = useCallback(async (d) => {
    alert(JSON.stringify(d))
    //window.location.pathname = "/"
  })

  return (
    <div className="flex justify-center">
      <form className="flex flex-col gap-4 w-3/12" onSubmit={handleSubmit(onSubmit)} noValidate>
        <label className="flex flex-col">
          Email:
          <input {...register("email")} className="border-2"/>
        </label>
        <label className="flex flex-col">
          password
          <input {...register("password")} className="border-2"/>
        </label>
        <input type="submit" value="Login" className="bg-blue-500"/>
        </form>
      </div>
  )

}

export default LoginForm