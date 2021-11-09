import { Card } from "react-bootstrap";
import Component4 from "./component4";
import { useEffect } from "react";
export default function Component3({}) {
  useEffect(() => {
    console.log("Component 3 rendered");
  });
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
