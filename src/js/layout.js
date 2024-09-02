import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import injectContext from "./store/appContext";


import { Footer } from "./component/footer";
import { NavbarMain } from "./component/NavbarMain";

import { Characters } from "./component/Characters";
import { Planets } from "./component/Planets";
import { Vehicles } from "./component/Vehicles";

import { CharacterInfo } from "./views/CharacterInfo";
import { PlanetsInfo } from "./views/PlanetsInfo";
import { VehiclesInfo } from "./views/VehiclesInfo";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (

		<div>

			<BrowserRouter basename={basename}>

				<ScrollToTop>

					<NavbarMain />

					<Routes>

						<Route path="/" element={<Home />} />
						<Route path="/characters" element={<Characters />} />
						<Route path="/vehicles" element={<Vehicles />} />
						<Route path="/planets" element={<Planets />} />
						<Route path="/characterInfo/:id/:character_name" element={<CharacterInfo />} />
						<Route path="/planetInfo/:id/:planet_name" element={<PlanetsInfo />} />
						<Route path="/vehicleInfo/:id/:vehicle_name" element={<VehiclesInfo />} />
						<Route path="*" element={<h1>Not found!</h1>} />

					</Routes>

					<Footer />

				</ScrollToTop>

			</BrowserRouter>



		</div>
	);
};


export default injectContext(Layout);
