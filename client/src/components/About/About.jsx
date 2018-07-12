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
					<p className="about-text">Hey there, I'm Henry Aguirre, and I'm a frontend web developer with years of practice in HMTL, CSS, and Javascript.
I've also created my current projects with new tools, such as React, node.js, JQuery and MySQL. Please check out
my work below and shoot me an email or call if you have any questions. </p>
				</div>	
			</div>			
		</div>
	</div>
);

export default About;