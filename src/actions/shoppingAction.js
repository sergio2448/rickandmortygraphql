import {
  GET_CHARACTERS,
  GET_EPISODES,
  ADD_TO_CART_EPISODES,
  ADD_TO_CART_CHARACTERS,
  CLEAR_CART,
  REMOVE_ALL_FROM_CART,
  REMOVE_ONE_FROM_CART,
} from "../types";

export const getCharacters = (data) => ({ type: GET_CHARACTERS, payload: data})

export const getEpisodes = (data) => ({ type: GET_EPISODES, payload: data})

export const addToCartEpisodes = (id) => ({ type: ADD_TO_CART_EPISODES, payload: id });

export const addToCartCharacters = (id) => ({ type: ADD_TO_CART_CHARACTERS, payload: id });

export const delFromCart = (id, all = false) =>
  all
    ? { type: REMOVE_ALL_FROM_CART, payload: id }
    : { type: REMOVE_ONE_FROM_CART, payload: id };

export const clearCart = () => ({ type: CLEAR_CART });
