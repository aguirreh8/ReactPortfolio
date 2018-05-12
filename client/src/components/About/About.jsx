import React from "react";
import "./About.css";
import myPic from "../../images/me.png";

const About = () => (
	<div className="component-holder about">
		<div className="container">
			<h4 className="title">About</h4>
			<div className="row">
				<div className="col">
					<img className="profile-picture" src={myPic} alt="Henry Aguirre" title="Henry Aguirre"/>
				</div>				
				<div className="col">
					<p className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
					sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
					in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
					proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
				</div>	
			</div>			
		</div>
	</div>
);

export default About;