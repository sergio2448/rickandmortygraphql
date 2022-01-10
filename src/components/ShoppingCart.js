import { useSelector } from "react-redux";
import Character from "./characters/Character";
import Episode from "./episodes/Episode";

const ShoppingCart = () => {
  const cartShoppingEpisodes = useSelector(state => state.cartEpisodes)
  const cartShoppingCharacters = useSelector(state => state.cartCharacters)
console.log('cartShoppingEpisodes', cartShoppingEpisodes)
console.log('cartShoppingCharacters', cartShoppingCharacters)


  /* const delFromCart = () => {};

  const clearCart = () => {}; */
  return (
    <div className="container">
      <div className="row">
          <h2>Carrito de Compras</h2>
          {cartShoppingEpisodes &&
            cartShoppingEpisodes.map((episode) => (
              <Episode key={episode.id} episode={episode} />
            ))}
            {cartShoppingCharacters &&
            cartShoppingCharacters.map((character) => (
              <Character key={character.id} character={character} />
            ))}
        </div>
    </div>

  );
};

export default ShoppingCart;
