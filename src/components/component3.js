import { Card } from "react-bootstrap";
import Component4 from "./component4";

export default function Component3() {
  return (
    <Card>
      <Card.Header>Component 3</Card.Header>
      <Card.Body>
        <Card.Text>Ini Component 3</Card.Text>
        <Component4 />
      </Card.Body>
    </Card>
  );
}
