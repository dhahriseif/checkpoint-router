import React, { useState } from "react";
import Card1 from "./Card";
import { data } from "../data";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function List({ search, rate }) {
  const [movieState, setMovieState] = useState(data);
  const [newMovie, setNewMovie] = useState({
    title: "",
    image: "",
    year: 0,
    rating: 0,
  });

  function handleAddMovie(e) {
    e.preventDefault();
    setMovieState([...movieState, newMovie]);
  }
  return (
    <div className="list">
      <div className="form">
        <Form className="form"
          onChange={(e) => {
            setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
          }}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Title" name="title" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Img src" name="image" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="number" placeholder="Year" name="year" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="number" placeholder="Rate" name="rating" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Button variant="primary" type="button" onClick={handleAddMovie}>
            Submit
          </Button>
        </Form>
      </div>
      {movieState
        .filter((elem) =>
          elem.title.toUpperCase().includes(search.toUpperCase())
        )
        .filter((ele) => (rate ? ele.rating === rate : ele))
        .map((movie) => (
          <Card1
            id={movie.id}
            image={movie.image}
            title={movie.title}
            rating={movie.rating}
            year={movie.year}
          />
        ))}
    </div>
  );
}
export default List;
