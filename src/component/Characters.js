import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import Character from "./Character";
import { gql } from "@apollo/client";

function Characters() {
  const [page, setPage] = useState(1);
  const [name, setName] = useState({ name: "" }); //name = {name: ""}
  const { error, data } = useQuery(CHARACTERS, {
    variables: { page: page, filter: name },
  });

  const handleName = (event) => {
    let filterCharacter = {};
    filterCharacter.name = event.target.value;
    setName({ ...filterCharacter });
  };
  if (error) {
    try {
      return <p>Error: {error.networkError.result.errors[0].message}</p>;
    } catch (error) {
      return <p>No results</p>;
    }
  }

  return (
    <div className="container">
      <input
        class="mr-sm-2 mt-sm-4"
        type="search"
        placeholder="Search Character"
        aria-label="Search"
        value={name.name}
        onChange={handleName}
      />

      <h2 className="my-5 text-center">
        {data ? `${data.characters.info.count} records found` : ""}
      </h2>

      <div className="row">
        {data &&
          data.characters.results.map((character) => (
            <Character key={character.id} character={character} />
          ))}
      </div>

      <ReactPaginate
        nextLabel="next >"
        onPageChange={(event) => setPage(event.selected + 1)}
        pageRangeDisplayed={3}
        marginPagesDisplayed={3}
        pageCount={data?.characters.info.pages}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </div>
  );
}

export default Characters;

const CHARACTERS = gql`
  query characters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      info {
        count
        pages
      }
      results {
        id
        image
        name
        species
        location {
          id
          name
        }
      }
    }
  }
`;
