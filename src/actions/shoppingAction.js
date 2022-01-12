import {
  GET_CHARACTERS,
  GET_EPISODES,
  ADD_TO_CART_CHARACTERS,
  ADD_TO_CART_EPISODES,
  REMOVE_FROM_CART_CHARACTERS,
  REMOVE_FROM_CART_EPISODES,
} from "../types";

export const getCharacters = (data) => ({
  type: GET_CHARACTERS,
  payload: data,
});

export const getEpisodes = (data) => ({ type: GET_EPISODES, payload: data });

export const addToCartCharacters = (id) => ({
  type: ADD_TO_CART_CHARACTERS,
  payload: id,
});

export const addToCartEpisodes = (id) => ({
  type: ADD_TO_CART_EPISODES,
  payload: id,
});

export const delFromCartCharacters = (id) => ({
  type: REMOVE_FROM_CART_CHARACTERS,
  payload: id,
});

export const delFromCartEpisodes = (id) => ({
  type: REMOVE_FROM_CART_EPISODES,
  payload: id,
});
