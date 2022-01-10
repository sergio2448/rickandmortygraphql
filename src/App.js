import React from "react";
import { Route } from "react-router-dom";
import Episodes from "./components/episodes/Episodes";
import Characters from "./components/characters/Characters";
import NavBar from "./components/common/NavBar";
import ShoppingCart from "./components/ShoppingCart";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <React.Fragment>
        <NavBar />
        <Route path="/cart" component={ShoppingCart} />
        <Route path="/characters" component={Characters} />
        <Route exact path="/episodes" component={Episodes} />
      </React.Fragment>
    </Provider>
  );
}

export default App;
