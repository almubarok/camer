import { Card } from "react-bootstrap";
import Component2 from "./component2";
export default function Component1() {
  return (
    <Card>
      <Card.Header>Component 1</Card.Header>
      <Card.Body>
        <Card.Text>Ini Component 1</Card.Text>
        <Component2 />
      </Card.Body>
    </Card>
  );
}
