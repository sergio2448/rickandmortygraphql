import { gql, useQuery } from "@apollo/client";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCartCharacters, getCharacters } from "../../actions/shoppingAction";
import Pagination from '../common/Pagination';
import Search from '../common/Search';
import Title from '../common/Title';
import Character from "./Character";

function Characters() {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState({ name: '' });
  const { error, data } = useQuery(CHARACTERS, {
    variables: { page: page, filter: filter },
  });
  const state3 = useSelector((state) => state.productsCharacters);
  const state4 = useSelector((state) => state.cartCharacters);
  const dispatch = useDispatch();
  console.log("productsCharacters", state3);
  console.log("cartCharacters", state4);
  useEffect(() => {
    setTimeout(() => {
      console.log("Entrando en el useEffecty el Timeout", data);
      dispatch(getCharacters(data));
    }, 5000);
  }, [data]);

if (error && error.networkError) {
  return <p>Error: {error.networkError.result.errors[0].message}</p>;
}

  return (
    <div className="container">
      <Title count={data ? data.characters.info.count : 0} />

      <Search filter={filter} setFilter={setFilter} />

      <div className="row">
      {data && data.characters.results.map((character) => (
        <Character key={character.id} character={character} addToCartCharacters={() => dispatch(addToCartCharacters(character.id))}/>
      ))}
    </div>

      <Pagination setPage={setPage} pageCount={data?.characters.info.pages} />
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
