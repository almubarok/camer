import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import useUserLogin from "hooks/useUserLogin";
import { setCookie } from "nookies";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { doLogin, user, errorGet } = useUserLogin();
  const navigate = useNavigate();

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  if (errorGet) {
    console.log(errorGet);
  }

  useEffect(() => {
    if (user?.length > 0) {
      setCookie(null, "userId", user[0].id);
      alert("welcome");
      navigate("/", { replace: true });
    }
    if (user?.length === 0) {
      alert("login gagal");
    }
  }, [user, navigate]);

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    doLogin({
      variables: {
        email,
        password,
      },
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          onChange={handleChangeEmail}
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
          onChange={handleChangePassword}
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
