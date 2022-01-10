import {
  GET_CHARACTERS,
  ADD_TO_CART_CHARACTERS,
  GET_EPISODES,
  ADD_TO_CART_EPISODES,
  REMOVE_ONE_FROM_CART,
  REMOVE_ALL_FROM_CART,
  CLEAR_CART,
} from "../types";

export const initialState = {
  productsCharacters: [],
  cartCharacters: [],
  productsEpisodes: [],
  cartEpisodes: [],
};

/* export function getEpisodes(state, action) {
  switch (action.type) {
    case GET_EPISODES: {
      return {
        ...state,
        products: action.payload
      }
    }
    default:
      return state;
  }
} */

export function shoppingReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CHARACTERS: {
      console.log("Entrando a GET_CHARACTERS", action.payload);
      return {
        ...state,
        productsCharacters: action.payload,
      };
    }
    case GET_EPISODES: {
      console.log("Entrando a GET_EPISODES", action.payload);
      return {
        ...state,
        productsEpisodes: action.payload,
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
    case ADD_TO_CART_CHARACTERS: {
      let newItem = state.productsCharacters.characters.results.find(
        (product) => product.id === action.payload
      );
      console.log("Entrando a ADD_TO_CART_CHARACTERS y mostrando el Item", newItem);
      return {
        ...state,
        cartCharacters: [...state.cartCharacters, newItem],
      };
    }
    case REMOVE_ONE_FROM_CART: {
      let itemToDelete = state.cart.find((item) => item.id === action.payload);

      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
          ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
        };
    }
    case REMOVE_ALL_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }
    case CLEAR_CART: {
      return initialState;
    }
    default:
      return state;
  }
}
