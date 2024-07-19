import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
function navbar(){
	return(
		<nav>
			<div className="container nav-container">
				<Link to="/" className="logo">Pravalika</Link>
				<div className="nav__links">
					<li><Link to="./about_me/about">About</Link></li>
					<li><Link to="./experience/experience">Experience</Link></li>
					<li><Link to="./projects/project">Projects</Link></li>
					<li><Link to="./contacts/contact">Contact</Link></li>
				</div>
			</div>
		</nav>
	)
}

export default navbar;