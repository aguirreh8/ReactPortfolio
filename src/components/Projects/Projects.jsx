import React from "react";
import "./Projects.css";
import Webventeer from "../../images/webventeer.jpg";
import WeatherStyle from "../../images/weatherstyle.jpg"

const Projects = () => (
	<div className="projects-holder">
		<div className="project-component--title">Projects</div>
		<div className="gallery js-flickity">

		  <div className="gallery-cell">
		  	<img src={Webventeer} className="project-img"/>
		  	<p className="project-text">
		  		<span className="project-title">Webventeer</span>
		  		<br />
		  		Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
				sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
				in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum
				<br />
				<br />
				<span>
					<a href="https://weather-style.herokuapp.com/" target="_blank" class="project-link green">Go To Site</a>
				</span>
				<span>
					<a href="https://github.com/octaviahub/weatherstyle" target="_blank" class="project-link red">Go to Repo</a>
				</span>
			</p>
		  </div>

		  <div className="gallery-cell">
		  	<img src={WeatherStyle} className="project-img"/>
		  	<p className="project-text">
		  		<span className="project-title">WeatherStyle</span>
		  		<br />
		  		Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
				sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
				in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum
				<br />
				<br />
				<span>
					<a href="https://mariuxiv08.github.io/Webventeer/index.html" target="_blank" class="project-link green">Go To Site</a>
				</span>
				<span>
					<a href="https://github.com/Mariuxiv08/Webventeer" target="_blank" class="project-link red">Go to Repo</a>
				</span>
			</p>
		  </div>

		</div>
	</div>
)

export default Projects;