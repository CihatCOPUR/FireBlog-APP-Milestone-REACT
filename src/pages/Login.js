import { useState } from "react";


export const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")


  const handleClick = (e) => {
    e.preventDefault();
    console.log(email.password)
  }


  return (
    <div>
        <h1>Sıng <span>???</span></h1>
        <form  >
         <input type="email"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
         <br />
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} /> <br />
        <button type="submit"  onClick={handleClick} >Login</button>   <br />
        </form>
        <button>Enter with Google</button>
    </div>
  )
}
