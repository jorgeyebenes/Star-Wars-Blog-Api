import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.css";
import { CardComponent } from "../component/CardComponent";
import { Context } from "../store/appContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swiper from 'swiper';
import { Jumbotron } from "../component/Jumbotron";

export const Home = () => {

	const { store, actions } = useContext(Context);
	const { id, character_name } = useParams();

	useEffect(() => {

		const swiper = new Swiper('.swiper-container', {

			slidesPerView: 'auto', // Muestra tantos cards como quepan en el contenedor
			spaceBetween: 10, // Espacio entre las cards

		});
	}, []);

	return (

	
	<div className="text-center mt-5">

		<Jumbotron />

		<div className="example-divider">
			<br></br>
		</div>

		<p className="text-warning text-start ms-5 fs-1">Characters</p>

			<div className="mt-4 bloque-card-mobile fade-in ms-5">

				<div className="swiper-container-paginas">

					<div className="swiper-wrapper-paginas scrollableDiv-paginas d-flex mb-5">

						{store.characters && (
							store.characters.map((characters, index) => (
								<div className='swiper-slide-paginas ps-4 pt-3 characters fade-in'>
									<CardComponent key={index} title={characters.name} personalPage={`/charactersInfo/${characters.uid}/${characters.name}`} info={''} favourite={store.favourites?.includes(characters.name)? null : () => actions.addFavourite(characters.name)} heart={store.favourites?.includes(characters.name)
										? <i className="fa-solid fa-heart"></i>
										: <i className="fa-regular fa-heart"></i>} img={
											characters.name === "Luke Skywalker" ? 'https://starwars-visualguide.com/assets/img/characters/1.jpg'
												: characters.name === "C-3PO" ? 'https://starwars-visualguide.com/assets/img/characters/2.jpg'
													: characters.name === "R2-D2" ? 'https://starwars-visualguide.com/assets/img/characters/3.jpg'
														: characters.name === "Darth Vader" ? 'https://starwars-visualguide.com/assets/img/characters/4.jpg'
															: characters.name === "Leia Organa" ? 'https://starwars-visualguide.com/assets/img/characters/5.jpg'
																: characters.name === "Owen Lars" ? 'https://starwars-visualguide.com/assets/img/characters/6.jpg'
																	: characters.name === "Beru Whitesun lars" ? 'https://starwars-visualguide.com/assets/img/characters/7.jpg'
																		: characters.name === "R5-D4" ? 'https://starwars-visualguide.com/assets/img/characters/8.jpg'
																			: characters.name === "Biggs Darklighter" ? 'https://starwars-visualguide.com/assets/img/characters/9.jpg'
																				: characters.name === "Obi-Wan Kenobi" ? 'https://starwars-visualguide.com/assets/img/characters/10.jpg'
																					: ''
										} />

								</div>
							)))}
					</div>
				</div>
			</div>


			<p className="text-warning text-start ms-5 fs-1">Vehicles</p>
			<div className="mt-4 bloque-card-mobile fade-in ms-5">

				<div className="swiper-container-paginas">
					<div className="swiper-wrapper-paginas scrollableDiv-paginas d-flex mb-5">
						{store.vehicle && (
							store.vehicle.map((vehicles, index) => (
								<div className='swiper-slide-paginas vehicles ps-4 pt-3'>
									<CardComponent key={index} title={vehicles.name} personalPage={`/info_vehicles/${vehicles.uid}/${vehicles.name.replace(/[/]/gi, "-")}`} info={''} favourite={store.favourites?.includes(vehicles.name)? '' : () => actions.addFavourite(vehicles.name)} corazon={store.favourites?.includes(vehicles.name)
										? <i className="fa-solid fa-heart"></i>
										: <i className="fa-regular fa-heart"></i>}  img={
										vehicles.name === "Sand Crawler" ? 'https://starwars-visualguide.com/assets/img/vehicles/4.jpg'
											: vehicles.name === "X-34 landspeeder" ? 'https://starwars-visualguide.com/assets/img/vehicles/7.jpg'
												: vehicles.name === "T-16 skyhopper" ? 'https://starwars-visualguide.com/assets/img/vehicles/6.jpg'
													: vehicles.name === "TIE/LN starfighter" ? 'https://starwars-visualguide.com/assets/img/vehicles/8.jpg'
														: vehicles.name === "Snowspeeder" ? 'https://starwars-visualguide.com/assets/img/vehicles/14.jpg'
															: vehicles.name === "AT-AT" ? 'https://starwars-visualguide.com/assets/img/vehicles/18.jpg'
																: vehicles.name === "TIE bomber" ? 'https://starwars-visualguide.com/assets/img/vehicles/16.jpg'
																	: vehicles.name === "AT-ST" ? 'https://starwars-visualguide.com/assets/img/vehicles/19.jpg'
																		: vehicles.name === "Storm IV Twin-Pod cloud car" ? 'https://starwars-visualguide.com/assets/img/vehicles/20.jpg'
																			: vehicles.name === "Sail barge" ? 'https://starwars-visualguide.com/assets/img/vehicles/24.jpg'
																				: ''
									}
									/>
								</div>
							)))}
					</div>
				</div>
			</div>

			<p className="text-warning text-start ms-5 fs-1">Planets</p>
			<div className="mt-4 bloque-card-mobile fade-in ms-5">

				<div className="swiper-container-paginas">
					<div className="swiper-wrapper-paginas scrollableDiv-paginas d-flex">
						{store.planets && (
							store.planets.map((planets, index) => (
								<div className='swiper-slide-paginas planets ps-4 pt-3 fade-in'>
									<CardComponent key={index} title={planets.name} favourite={store.favourites?.includes(planets.name)? '' : () => actions.addFavourite(planets.name)} personalPage={`/info_planets/${planets.uid}/${planets.name}`} corazon={store.favourites?.includes(planets.name)
										? <i className="fa-solid fa-heart"></i>
										: <i className="fa-regular fa-heart"></i>}  info={''} img={
										planets.name === 'Tatooine' ? 'https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png/revision/latest?cb=20131214162357'
											: planets.name === 'Alderaan' ? 'https://starwars-visualguide.com/assets/img/planets/2.jpg'
												: planets.name === 'Yavin IV' ? 'https://starwars-visualguide.com/assets/img/planets/3.jpg'
													: planets.name === 'Hoth' ? 'https://starwars-visualguide.com/assets/img/planets/4.jpg'
														: planets.name === 'Dagobah' ? 'https://starwars-visualguide.com/assets/img/planets/5.jpg'
															: planets.name === 'Bespin' ? 'https://starwars-visualguide.com/assets/img/planets/6.jpg'
																: planets.name === 'Endor' ? 'https://starwars-visualguide.com/assets/img/planets/7.jpg'
																	: planets.name === 'Naboo' ? 'https://starwars-visualguide.com/assets/img/planets/8.jpg'
																		: planets.name === 'Coruscant' ? 'https://starwars-visualguide.com/assets/img/planets/9.jpg'
																			: planets.name === 'Kamino' ? 'https://starwars-visualguide.com/assets/img/planets/10.jpg'
																				: ''
										 } />
								</div>
							)))}
					
					</div>
				</div>
			</div>
		</div>
	)
};