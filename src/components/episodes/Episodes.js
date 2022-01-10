import { gql, useQuery } from "@apollo/client";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCartEpisodes, getEpisodes } from "../../actions/shoppingAction";
import Pagination from "../common/Pagination";
import Search from "../common/Search";
import Title from "../common/Title";
import Episode from "./Episode";

function Episodes() {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState({ name: "" });
  const { error, data } = useQuery(EPISODES, {
    variables: { page: page, filter: filter },
  });
  const state1 = useSelector((state) => state.productsEpisodes);
  const state2 = useSelector((state) => state.cartEpisodes);
  const dispatch = useDispatch();
  console.log("productsEpisodes", state1);
  console.log("cartEpisodes", state2);
  useEffect(() => {
    setTimeout(() => {
      console.log("Entrando en el useEffecty el Timeout", data);
      dispatch(getEpisodes(data));
    }, 5000);
  }, [data]);

  if (error && error.networkError) {
    return <p>Error: {error.networkError.result.errors[0].message}</p>;
  }

  return (
    <div className="container">
      <Title count={data ? data.episodes.info.count : 0} />

      <Search filter={filter} setFilter={setFilter} />

      <div className="row">
        {data &&
          data.episodes.results.map((episode) => (
            <Episode
              key={episode.id}
              episode={episode}
              addToCartEpisodes={() => dispatch(addToCartEpisodes(episode.id))}
            />
          ))}
      </div>

      <Pagination setPage={setPage} pageCount={data?.episodes.info.pages} />
    </div>
  );
}

export default Episodes;

const EPISODES = gql`
  query episodes($page: Int, $filter: FilterEpisode) {
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
