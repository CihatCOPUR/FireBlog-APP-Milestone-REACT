import { useState } from "react";
import { auth, provider } from "../helpers/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useNavigate } from "react-router";
import { Button, Form } from "react-bootstrap";

export const Login = ({ setIsAuth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();



const handleSubmit = (e) => {
  e.preventDefault();
  try {
    signInWithEmailAndPassword(auth,email,password).then(()=>console.log(auth))
    navigate("/")
  } catch (error) {
    console.log(error.message)
  }
}


 
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then(() => {
      setIsAuth(true);
    });
  };
  return (
    <div>
      <h1>
        Sıng <span>in</span>
      </h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={email}
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <button onClick={signInWithGoogle}>Enter with Google</button>
      <button>Logout</button>
    </div>
  );
};
