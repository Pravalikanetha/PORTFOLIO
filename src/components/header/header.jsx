import React from 'react';
import './header.css';

function header(){
	return(
		<header>
			<div className="container header_container">
				<div className="header_left">
				<img src="./images/my_image1.png" alt="myImage" className="My_photo1"/>
				</div>
				<div className="header_right">
					<p><b>Hello, I'm</b></p>
					<h1>PravalikaD</h1>
					<h2>Frontend_Developer</h2>
					<div className="header_action_aria">
						<a href="" className="btn" download="/images/PravalikaD Resume.pdf">Download</a>
						<a href="#Contact" className="btn btn-dark" >Contact Info</a>
					</div>
					<div className="header-social">
						<a href=""><img src="/images/github.png" alt="github" className="icon1"/></a>
						<a href=""><img src="/images/linkedIn.png" alt="linkedIn" className="icon1"/></a>
					</div>
				</div>
			</div>
		</header>
	)
}

export default header;