import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import Episode from "./Episode";
import { gql } from "@apollo/client";

function Episodes() {
  const [page, setPage] = useState(1);
  const [name, setName] = useState({ name: "" });
  const { error, data } = useQuery(EPISODES, {
    variables: { page: page, filter: name },
  });

  const handleName = (event) => {
    let filterEpisode = {};
    filterEpisode.name = event.target.value;
    setName({ ...filterEpisode });
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
        placeholder="Search Episode"
        aria-label="Search"
        value={name.name}
        onChange={handleName}
      />

      <h2 className="my-5 text-center">
        {data ? `${data.episodes.info.count} records found` : ""}
      </h2>

      <div className="row">
        {data &&
          data.episodes.results.map((episode) => (
            <Episode key={episode.id} episode={episode} />
          ))}
      </div>

      <ReactPaginate
        nextLabel="next >"
        onPageChange={(event) => setPage(event.selected + 1)}
        pageRangeDisplayed={3}
        marginPagesDisplayed={3}
        pageCount={data?.episodes.info.pages}
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

export default Episodes;

const EPISODES = gql`
  query allepisodes($page: Int, $filter: FilterEpisode) {
    episodes(page: $page, filter: $filter) {
      info {
        count
        pages
      }
      results {
        id
        name
        air_date
        characters {
          id
          image
        }
      }
    }
  }
`;
