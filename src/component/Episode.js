import React from "react";
import { Carousel } from "react-bootstrap";

function Episode({ episode }) {
  console.log("1", episode.name);
  const fourimg = episode.characters.map((images) => images.image).slice(5, 9);
  console.log("2", fourimg);

  return (
    <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
      <div className="card">
        <Carousel
          id="carousel"
          className="carousel-fade"
          autoPlay={true}
          controls={false}
          indicators={true}
        >
          <Carousel.Item interval={5000}>
            <img className="d-block w-100" src={fourimg[0]} alt="" />
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img className="d-block w-100" src={fourimg[1]} alt="" />
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img className="d-block w-100" src={fourimg[2]} alt="" />
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img className="d-block w-100" src={fourimg[3]} alt="" />
          </Carousel.Item>
        </Carousel>
        <div className="card-body">
          <div className="text-truncate">
            <strong>Episode:</strong> {episode.name}
          </div>
          <div className="text-truncate">
            <strong>Air date:</strong> {episode.air_date}
          </div>
          <button type="button" className="btn btn-primary w-100 mt-2">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Episode;
