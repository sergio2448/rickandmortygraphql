import {
  GET_CHARACTERS,
  GET_EPISODES,
  ADD_TO_CART_CHARACTERS,
  ADD_TO_CART_EPISODES,
  REMOVE_FROM_CART_EPISODES,
  REMOVE_FROM_CART_CHARACTERS,
} from "../types";

export const initialState = {
  productsCharacters: [],
  cartCharacters: [],
  productsEpisodes: [],
  cartEpisodes: [],
};

export function shoppingReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CHARACTERS: {
      /* console.log("Entrando a GET_CHARACTERS", action.payload); */
      return {
        ...state,
        productsCharacters: action.payload,
      };
    }
    case GET_EPISODES: {
      /* console.log("Entrando a GET_EPISODES", action.payload); */
      return {
        ...state,
        productsEpisodes: action.payload,
      };
    }
    case ADD_TO_CART_CHARACTERS: {
      let newItem = state.productsCharacters.characters.results.find(
        (product) => product.id === action.payload
      );
      console.log(
        "Entrando a ADD_TO_CART_CHARACTERS y mostrando el Item",
        newItem
      );
      return {
        ...state,
        cartCharacters: [...state.cartCharacters, newItem],
      };
    }
    case ADD_TO_CART_EPISODES: {
      let newItem = state.productsEpisodes.episodes.results.find(
        (product) => product.id === action.payload
      );
      console.log("Entrando a ADD_TO_CART y mostrando el Item", newItem);
      return {
        ...state,
        cartEpisodes: [...state.cartEpisodes, newItem],
      };
    }
    case REMOVE_FROM_CART_CHARACTERS: {
      return {
        ...state,
        cartCharacters: state.cartCharacters.filter(
          (item) => item.id !== action.payload
        ),
      };
    }
    case REMOVE_FROM_CART_EPISODES: {
      return {
        ...state,
        cartEpisodes: state.cartEpisodes.filter(
          (item) => item.id !== action.payload
        ),
      };
    }
    default:
      return state;
  }
}
