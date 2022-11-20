import { useState } from "react"
import { Navigate, Outlet } from "react-router"



export const PrivateRouter = () => {
    const [user, setUser] = useState(false)
  return (
    <div>
    {user ? <Outlet/> : <Navigate  to="/login"/>}
    </div>
  )
}
