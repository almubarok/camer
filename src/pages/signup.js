import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import useUserSignup from "hooks/useUserSignup";
import { setCookie } from "nookies";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const { doSignup, signupError, signupLoading, signupData } = useUserSignup({
    onError: () => {},
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (
      signupError?.message?.includes(
        'duplicate key value violates unique constraint "user_email_key"'
      )
    ) {
      alert("account exist");
    }
  }, [signupError]);

  useEffect(() => {
    if (signupData) {
      alert("signup success");
      setCookie(null, "userId", signupData.id);
      navigate("/", { replace: true });
    }
  }, [signupData, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    doSignup({
      variables: {
        email,
        password,
        name,
      },
    });
  };

  if (signupLoading) {
    return <h1>LOADING</h1>;
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter Name"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter email"
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
