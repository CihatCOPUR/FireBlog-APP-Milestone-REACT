import { useState } from "react"
import {BrowserRouter , Routes , Route} from "react-router-dom"
import NavbarMenu from "../components/NavbarMenu"


import { About } from "../pages/About"
import { Dashboard } from "../pages/Dashboard"
import { Detail } from "../pages/Detail"
import { Login } from "../pages/Login"
import { NewBlog } from "../pages/NewBlog"
import { Profile } from "../pages/Profile"
import { Register } from "../pages/Register"
import { UpDateBlog } from "../pages/UpDateBlog"
import { PrivateRouter } from "./PrivateRouter"

export const AppRouter = () => {

  const [isAuth,setIsAuth] = useState(false)


  return (
    <div>
        <BrowserRouter>
        <NavbarMenu/>
        <Routes>
            <Route path="/"  element={<Dashboard/>}  />

            <Route path="/about"  element={<PrivateRouter/>}  >
                <Route  path="" element={<About/>} /> </Route> 

                <Route path="/profile"  element={<PrivateRouter/>}  >
                <Route  path="" element={<Profile/>} /> </Route> 

                <Route path="/detail"  element={<PrivateRouter/>}  >
                <Route  path="" element={<Detail/>} /> </Route> 

                <Route path="/updateblog"  element={<PrivateRouter/>}  >
                <Route  path="" element={<UpDateBlog/>} />

                </Route>  
                <Route path="/newblog"  element={<PrivateRouter/>}  >
                <Route  path="" element={<NewBlog/>} />

                </Route>         
                  
            <Route path="login"  element={<Login setIsAuth={setIsAuth()} />}  />
            
            <Route path="register"  element={<Register/>}  />
            
        </Routes>
        </BrowserRouter>
    </div>
  )
}
