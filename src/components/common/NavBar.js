import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function NavBar() {
  const stateCharacters = useSelector((state) => state.cartCharacters);
  const stateEpisodes = useSelector((state) => state.cartEpisodes);
  const amount = stateCharacters.concat(stateEpisodes).length;
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Rick and Morty</Navbar.Brand>
        <Navbar.Toggle arial-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/characters">
              Characters
            </NavLink>
            <NavLink className="nav-link" to="/episodes">
              Episodes
            </NavLink>
            <NavLink className="nav-link" to="/cart">
              Cart ({amount})
            </NavLink>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
