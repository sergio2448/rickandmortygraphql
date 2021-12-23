import React from 'react';
import { NavLink } from 'react-router-dom';


export default function NavBar() {
    return (
        <header className="navbar">         
            <nav class="navbar navbar-light bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <li class="nav-item active">
                                <NavLink exact to="/cha" >Characters</NavLink>
                            </li>
                        </div>
                        <div className="col-sm">
                            <li class="nav-item active">
                                <NavLink to="/epi" >Episodes</NavLink>
                            </li>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}