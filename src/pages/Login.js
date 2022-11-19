import { useState } from "react";


export const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")


  const handleSubmit = (e) => {
  e.preventDefault();    
    console.log(email.password) // undifened geliyor ?????????????????
  }


  return (
    <div>
        <h1>Sıng <span>???</span></h1>
        <form onSubmit={handleSubmit} >
         <input type="email"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
         <br />
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} /> <br />
        <button type="submit"   >Login</button>   <br />
        </form>
        <button>Enter with Google</button>
    </div>
  )
}
