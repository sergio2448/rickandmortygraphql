import React from "react";

function Character({
  character,
  addToCartCharacters,
  delFromCartCharacters,
  removeButton = false,
}) {
  return (
    <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
      <div className="card">
        <img
          className="card-img-top"
          src={character.image}
          alt={character.name}
        />
        <div className="card-body">
          <h5 className="card-title mt-1">{character.name}</h5>
          <div>
            <strong>Specie:</strong> {character.species}
          </div>
          <div className="text-truncate">
            <strong>Location:</strong> {character.location.name}
          </div>
          <input
            type="number"
            placeholder="Amount (1-20)"
            min="1"
            max="20"
            className="btn btn-primary w-100 mt-1"
          ></input>
          <button
            onClick={
              removeButton
                ? () => delFromCartCharacters(character.id)
                : () => addToCartCharacters(character.id)
            }
            type="button"
            className="btn btn-primary w-100 mt-2"
          >
            {removeButton ? "Remove" : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Character;
