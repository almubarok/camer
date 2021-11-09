import { Col, Card } from "react-bootstrap";
import { formatUppercase } from "../helper/helper";
import { Link } from "react-router-dom";

export default function CardList({ title, url }) {
  return (
    <Col sm={3} className="my-2">
      <Card>
        <Card.Body>
          <Card.Title>{formatUppercase(title)}</Card.Title>
          <Card.Link>
            <Link to={`detail?url=${url}`}>Detail</Link>
          </Card.Link>
        </Card.Body>
      </Card>
    </Col>
  );
}
