import React from "react";
import "./Header.css";

const Header = () => (
	<nav className="navbar">
		<div className="container">
	  		<span className="navbar-brand mb-0 h1">Henry Aguirre</span>
	  		<nav className="nav">
			  <a className="nav-link" id="top" href="">Top</a>
			  <a className="nav-link" id="about" href="">About</a>
			  <a className="nav-link" id="projects" href="">Projects</a>
			  <a className="nav-link" id="contact" href="">Contact</a>
			</nav>
	  	</div>
	  	
	</nav>
)

export default Header;