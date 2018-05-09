import React from "react";
import "./About.css";
import myPic from "../../images/me.png";

const About = () => (
	<div className="about-container">
		<div className="container">
			<p className="title">About</p>
			<img className="profile-picture" src={myPic} alt="Henry Aguirre" title="Henry Aguirre"/>
			<p className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
			sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
			in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
			proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
		</div>
	</div>
);

export default About;