import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ReactStars from "react-stars";
import { Link } from "react-router-dom";


function Card1(props) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title className="movie-title">
            <span>{props.title}</span>
            <span>{props.year}</span>
          </Card.Title>
          <Card.Text>
            {
              <ReactStars
                count={5}
                size={24}
                color2={"#ffd700"}
                value={props.rating}
                edit={false}
              />
            }
          </Card.Text>
          <Link to={`/movies/${props.id}`} style={{ all: "unset" }}>
            <Button variant="primary">Watch Now</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Card1;
