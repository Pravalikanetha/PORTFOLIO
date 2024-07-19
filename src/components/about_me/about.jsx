import React from 'react';
import './about.css';

function About(){
	return(
		<>
		<section id="About">
			<p className="heading-p">Get to know More</p>
			<h1 className="heading">About Me</h1>
			<div className="container about-container">
				<div className="about-left">
					<img src="/images/my_image2.png" alt="myImage" className="My_photo2"/>
				</div>
				<div className="about-right">
					<div className="basic-edu">
						<div className="edu-box">
							<img src="/images/experience.png" alt="" className="icon1"/>
							<h4>Experience</h4>
							<p>Fresher <br/>
								Frontend Developer</p>
						</div>
						<div className="edu-box">
							<img src="/images/education.png" alt="" className="icon1"/>
							<h4>Education</h4>
							<p>
								Bachelors Degree(BTech) <br/>
								Computer Science And Engineering
							</p>
						</div>
					</div>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quaerat debitis illum illo vitae est mollitia provident distinctio necessitatibus? Perspiciatis voluptatum fugiat recusandae accusamus molestias ex enim architecto possimus! Temporibus quasi molestiae voluptatum, ullam maxime iure harum nobis sapiente sunt?
					</p>
				</div>
			</div>
		</section>
		</>
	)
}

export default About;