import { useState } from "react";
import { auth, provider } from "../helpers/firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { useNavigate } from "react-router";


export const Login = (props) => {
  const {setIsAuth}=props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
let navigate =useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email.password); // undifened geliyor ?????????????????
  };
const logout = () => {
  signOut(auth).then(()=>{
    setIsAuth(false);
    navigate("/")
  })
}
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then(() => {
    
      setIsAuth(true);
      navigate("/");
    });
  };
  return (
    <div>
      <h1>
        Sıng <span>???</span>
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />{" "}
        <br />
        <button type="submit">Login</button> <br />
      </form>
      <button onClick={signInWithGoogle}>Enter with Google</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
};
