import React from 'react';


function Episode({ episode }) {
  console.log(episode.characters)
  return (
    <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
      <div className="card">
      <div class="container">
          <div class="row">
            <div class="col">
              <img
                className="card-img-top"
                src={episode.characters[6].image}
                alt={episode.name}
              />
            </div>
            <div class="col">
              <img
                className="card-img-top"
                src={episode.characters[7].image}
                alt={episode.name}
              />
            </div>
            <div class="w-100"></div>
            <div class="col">
              <img
                className="card-img-top"
                src={episode.characters[8].image}
                alt={episode.name}
              />
            </div>
            <div class="col">
              <img
                className="card-img-top"
                src={episode.characters[9].image}
                alt={episode.name}
              />
            </div>
          </div>
        </div>
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