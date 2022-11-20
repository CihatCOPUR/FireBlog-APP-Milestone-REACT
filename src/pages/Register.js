import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router";
import { auth } from "../helpers/firebase";

export const Register = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();



const handleSubmit = (e) => {
  e.preventDefault();
  try {
    createUserWithEmailAndPassword(auth,email,password).then(()=>console.log(auth))
    navigate("/login")
  } catch (error) {
    console.log(error.message)
  }
}

  return (
    <div>
      <h1>
        Sıng <span>up</span>
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
      </div>
  )
}
