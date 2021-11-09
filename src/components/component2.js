import { Card } from "react-bootstrap";
import Component3 from "./component3";
export default function Component2() {
  return (
    <Card>
      <Card.Header>Component 2</Card.Header>
      <Card.Body>
        <Card.Text>Ini Component 2</Card.Text>
        <Component3 />
      </Card.Body>
    </Card>
  );
}
