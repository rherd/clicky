//sets up the reusable Jumbotron component
import React from "react";
import "./Jumbotron.css";

const Jumbotron = () => (
	<header className = "header">
		<h1>Clicky Game with Huskies</h1>
		<h2>Click on an image to start - press the same one more than once, and you lose! Make it through all 12 and you win... something.</h2>
	</header>
);

export default Jumbotron;