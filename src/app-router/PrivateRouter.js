import { useState } from "react"
import { Outlet } from "react-router"
import { Login } from "../pages/Login"


export const PrivateRouter = () => {
    const [user, setUser] = useState(false)
  return (
    <div>
    {user ? <Outlet/> : <Login/>}
    </div>
  )
}
