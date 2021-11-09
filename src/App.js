import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card } from "react-bootstrap";
import Component4 from "./components/component4";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./stores/counter";
import uniqid from "uniqid";

function App() {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const handleTodo = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: uniqid(),
      name: todo,
      isCompleted: false,
    };
    console.log(data);
    dispatch(addTodo(data));
    setTodo("");
  };

  return (
    <Container>
      <Card>
        <Card.Header>Root</Card.Header>
        <Card.Body>
          <form onSubmit={handleSubmit}>
            <input value={todo} onChange={handleTodo} />
            <button type="submit">Submit</button>
          </form>
        </Card.Body>
      </Card>
      <Component4 />
    </Container>
  );
}

export default App;
