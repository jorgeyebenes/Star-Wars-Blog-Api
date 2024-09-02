import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import '../../styles/navbarmain.css'
import { Context } from "../store/appContext";
import StarWarsLogo from "/workspaces/Star-Wars-Blog-Api/src/img/starwars.png"

export const NavbarMain = () => {

	const { store, actions } = useContext(Context);


	return (

		<>

		<nav className="navbar navbar-dark-expand-lg sticky-top">
			<div className="container-fluid px-5 d-flex justify-content-between align-items-center">
				
				<ul className="navbar-nav d-flex flex-row justify-content-around w-100">
				
				<li><Link to="/" className="nav-link"> 
					<img className="starwarslogo-img" src={StarWarsLogo} alt="Logo"></img></Link></li>
					<span className="text-secondary">|</span>
				<li><Link to="/Characters" className="nav-link itemsNavbar px-3 my-1">CHARACTERS</Link></li>
				<span className="text-secondary">|</span>
				<li><Link to="/" className="nav-link itemsNavbar px-3 my-1">VEHICLES</Link></li>
				<span className="text-secondary">|</span>
				<li><Link to="/Planets" className="nav-link itemsNavbar px-3 my-1">PLANETS</Link></li>				
				

				<div className="btn-group" role="group" aria-label="Button group with nested dropdown ">

							<div className="btn-group" role="group">
								<button type="button" className="btn btn-warning dropdown-toggle me-3" data-bs-toggle="dropdown" aria-expanded="false">
									Favourites <span className="bg-secondary px-1 rounded text-light">{store.favourites.length}</span>
								</button>
								<ul className="dropdown-menu p-3">
									{store.favourites && store.favourites.length > 0 ? (
										store.favourites.map((fav, index) => (
											<div key={index} className="d-flex align-items-center justify-content-between">
												<li className="pb-1">
													{fav}
												</li>
												<button onClick={() => actions.deleteFavourite(index)} className="btn"><i class="fa-solid fa-trash"></i></button>
											</div>
										))) : 'No Favourites'}
								</ul>
							</div>
						</div>
						<form className="d-flex" role="search">
							<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
							<button className="btn btn-outline-warning" type="submit">Search</button>
						</form>

					</ul>
			</div>

		</nav>

		<div className="d-flex justify-content-center">
				<img className="mt-5" src="https://seeklogo.com/images/S/star-wars-logo-886FACEAFF-seeklogo.com.png" />
		</div>								
	</>

);

};
