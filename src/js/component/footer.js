import React from "react";
import "/workspaces/Star-Wars-Blog-Api/src/styles/footer.css"
import braincolor from "/workspaces/Star-Wars-Blog-Api/src/img/braincolor.png"

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<p className="text-footer bordered-text">
			Made with <img src={braincolor} width="25px" height="25px"></img> by Jorge Yébenes
		</p>
	</footer>
);
