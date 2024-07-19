import React from 'react';
import './contact.css';
function contact(){
	return(
		<section id="Contact">
			<p className="heading-p">Get in touch</p>
			<h1 className="heading">Contact Me</h1>
			<div className="container contact-container">
				<div className="github">
					<img src="/images/github.png" alt="" className="icon1"/>
					<a href=""><h5>Github</h5></a> 
				</div>
				<div className="email">
					<img src="/images/email.png" alt="" className="icon1"/>
					<a href=""><h5>pravalikanetha1802@gmail.com</h5></a>
				</div>
				<div className="linkedin">
					<img src="/images/linkedIn.png" alt="" className="icon1"/>
					<a href=""><h5>LinkedIn</h5></a> 
				</div>
			</div>
		</section>
	)
}

export default contact;