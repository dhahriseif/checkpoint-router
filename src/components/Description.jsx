import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../data";
import ReactPlayer from "react-player";

function Description() {
  const { id } = useParams();
  return (
    <div>
      {data.map((movie) =>
        Number(id) === movie.id ? (
          <>
            <h1 className="title">{movie.title}</h1>
            <ReactPlayer url={movie.trailer} controls={true} />
            <h3 className="description">{movie.description}</h3>
          </>
        ) : null
      )}
    </div>
  );
}

export default Description;
