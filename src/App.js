import React from "react";
import { Route } from "react-router-dom";
import Episodes from "./component/Episodes";
import Characters from "./component/Characters";
import NavBar from "./component/NavBar";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Route exact path="/epi" component={Episodes} />
      <Route path="/cha" component={Characters} />
    </React.Fragment>
  );
}

export default App;
