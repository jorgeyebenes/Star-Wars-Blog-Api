import React from "react";
import { Link } from "react-router-dom";
import StarWarsLogo from "/workspaces/Star-Wars-Blog-Api/src/img/starwars.png"
import "/workspaces/Star-Wars-Blog-Api/src/styles/navbarmain.css"
import { Characters } from "./Characters";
import { Home } from "../views/home";
import { Planets } from "/workspaces/Star-Wars-Blog-Api/src/js/component/Planets.js"
import { Favourites } from "/workspaces/Star-Wars-Blog-Api/src/js/component/Favourites.js"

export const NavbarMain = () => {
	return (
		<nav className="navbar navbar-dark-expand-lg sticky-top">
			<div className="container-fluid px-5 d-flex justify-content-between align-items-center">
				
				<ul className="navbar-nav d-flex flex-row justify-content-around w-100">
				
				<li><Link to="/" className="nav-link"> 
					<img className="starwarslogo-img" src={StarWarsLogo} alt="Logo"></img></Link></li>
				<li><Link to="/" className="nav-link itemsNavbar px-3 my-1">HOME</Link></li>
				<li><Link to="/Characters" className="nav-link itemsNavbar px-3 my-1">CHARACTERS</Link></li>
				<li><Link to="/Planets" className="nav-link itemsNavbar px-3 my-1">PLANETS</Link></li>
				<li><Link to="/Favourites" className="nav-link itemsNavbar px-3 my-1">FAVOURITES</Link></li>
				
				</ul>

			</div>

		</nav>

);

};
