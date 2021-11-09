import { Card } from "react-bootstrap";
import Component3 from "./component3";
import { useEffect } from "react";

export default function Component2({}) {
  useEffect(() => {
    console.log("Component 2 rendered");
  });
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
