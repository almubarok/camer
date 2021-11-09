import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card, Button } from "react-bootstrap";
import Component1 from "./components/component1";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  return (
    <Container>
      <Card>
        <Card.Header>Root</Card.Header>
        <Card.Body>
          Value: {counter}
          <Button size="sm" className="m-2" onClick={handleIncrement}>
            Increment
          </Button>
          <Button size="sm" className="m-2" onClick={handleDecrement}>
            Decrement
          </Button>
          <Component1 />
        </Card.Body>
      </Card>
    </Container>
  );
}

export default App;
