import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

export default function NavBar() {
  return (
    <Navbar bg="primary" expand="md" sticky="top">
      <Navbar.Brand>
        <Link className="navbar-brand my-5" to="/">
          {/* <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/89371755883023.5996f8afa30d8.jpg"
            alt="icono"
            id="img"
            className="mx-2"
          /> */}
          Rick and Morty
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle arial-controls="basic-navbar-nav" />
      <Navbar.Collapse
        className="justify-content-md-end"
        id="basic-navbar-nav"
      >
        <Nav>
          <NavLink className="btn mr-2" to="/" exact>
            Home
          </NavLink>
          <NavLink className="btn mr-2" to="/cha">
            Characters
          </NavLink>
          <NavLink className="btn mr-2" to="/epi">
            Episodes
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
