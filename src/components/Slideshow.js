import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Placeholder from "react-bootstrap/Placeholder";
import "bootstrap/dist/css/bootstrap.min.css";

function CardExample(props) {
  return (
    <div className="d-flex justify-content-around">
      <Card style={{ width: "18rem", marginBottom: "20px" }}>
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.text}</Card.Text>
          <Button variant="primary">More details</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardExample;
