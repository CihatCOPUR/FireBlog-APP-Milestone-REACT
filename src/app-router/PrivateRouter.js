import { useState } from "react"
import { Login } from "../pages/Login"


export const PrivateRouter = () => {
    const [user, setUser] = useState(false)
  return (
    <div>
    {user ? "" : <Login/>}
    </div>
  )
}
