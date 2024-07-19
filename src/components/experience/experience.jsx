import React from 'react';
import './experience.css';
import { Link } from 'react-router-dom';
function Experience(){
	return(
		<section id="Experience">
			<p class="heading-p">Explore My</p>
			<h1 class="heading">Experience</h1>
			<div class="container experience-container">
				<div class="experience-box">
					<h2>Frontend Development</h2>
					<div class="experience">
						<div class="ex-div">
							<img src="/images/checked.png" class="icon2"/>
							<div>
								<h4>HTML</h4>
								<p>Experienced</p>
							</div>
						</div>
						<div class="ex-div">
							<img src="/images/checked.png" class="icon2"/>
							<div>
								<h4>CSS</h4>
								<p>Intermediate</p>
							</div>
						</div>
						<div class="ex-div">
							<img src="/images/checked.png" class="icon2"/>
							<div>
								<h4>JavaScript</h4>
								<p>Basic</p>
							</div>
						</div>
						<div class="ex-div">
							<img src="/images/checked.png" class="icon2"/>
							<div>
								<h4>ReactJS</h4>
								<p>Basic</p>
							</div>
						</div>
					</div>
				</div>
				<div class="experience-box">
					<h2>Familiar With</h2>
					<div class="experience">
						<div class="ex-div">
							<img src="/images/checked.png" class="icon2"/>
							<div>
								<h4>BootStrap</h4>
								<p>Experienced</p>
							</div>
						</div>
						<div class="ex-div">
							<img src="/images/checked.png" class="icon2"/>
							<div>
								<h4>Git</h4>
								<p>Basic</p>
							</div>
						</div>
						<div class="ex-div">
							<img src="/images/checked.png" class="icon2"/>
							<div>
								<h4>SQL</h4>
								<p>Basic</p>
							</div>
						</div>
						<div class="ex-div">
							<img src="/images/checked.png" class="icon2"/>
							<div>
								<h4>Tailwind</h4>
								<p>Basic</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Experience;