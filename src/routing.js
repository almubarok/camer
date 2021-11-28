import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import Navbar from "./components/Navbar";

// Pages
import Home from "./pages/index";
import TodoList from "./pages/todolist";
import Login from "./pages/login";
import Signup from "./pages/signup";
import NotFound from "./pages/notfound";

export default function Routing() {
  return (
    <>
      <Navbar />
      <Container className="mt-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todolist/:userId" element={<TodoList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </>
  );
}
