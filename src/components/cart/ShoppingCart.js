import { useDispatch, useSelector } from "react-redux";
import Character from "../characters/Character";
import Episode from "../episodes/Episode";
import {
  delFromCartCharacters,
  delFromCartEpisodes,
} from "../../actions/shoppingAction";

const ShoppingCart = () => {
  const cartShoppingEpisodes = useSelector((state) => state.cartEpisodes);
  const cartShoppingCharacters = useSelector((state) => state.cartCharacters);
  //console.log('cartShoppingEpisodes', cartShoppingEpisodes)
  //console.log('cartShoppingCharacters', cartShoppingCharacters)
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="row">
        <h2>Carrito de Compras</h2>
        {cartShoppingEpisodes &&
          cartShoppingEpisodes.map((episode) => (
            <Episode
              key={episode.id}
              episode={episode}
              removeButton={true}
              delFromCartEpisodes={() =>
                dispatch(delFromCartEpisodes(episode.id))
              }
            />
          ))}
        {cartShoppingCharacters &&
          cartShoppingCharacters.map((character) => (
            <Character
              key={character.id}
              character={character}
              removeButton={true}
              delFromCartCharacters={() =>
                dispatch(delFromCartCharacters(character.id))
              }
            />
          ))}
      </div>
    </div>
  );
};

export default ShoppingCart;
