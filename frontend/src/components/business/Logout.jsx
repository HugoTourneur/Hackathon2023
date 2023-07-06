import api from "@/utils/api"
import { useCallback } from "react"

const Logout = () => {
  const onLogout = useCallback(async () => {
    try {
      console.log("hello")
      const { data } = await api.get("/sign-out")
      console.log(data)
      window.location.pathname = "/"
    } catch (err) {
      console.log(err)
    }
  })

  return <button onClick={onLogout}>LOGOUT</button>
}

export default Logout
