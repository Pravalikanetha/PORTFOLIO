import React from 'react';
import './project.css';

function project(){
	return(
		<section id="Projects">
			<p className="heading-p">Browse My Recent</p>
			<h1 className="heading">Projects</h1>
			<div className="container project-container">
				<div className="project">
					<img src="/images/project_1.png" className="img_project"/>
					<h3>1.FoodDelivery</h3>
					<div className="header-action-aria">
						<a href="" className="btn">Github</a>
						<a href="" className="btn">Live Demo</a>
					</div>
				</div>
				<div className="project">
					<img src="/images/project_2.png" className="img_project"/>
					<h3>2.Noteskeeping</h3>
					<div className="header-action-aria">
						<a href="" className="btn">Github</a>
						<a href="" className="btn">Live Demo</a>
					</div>
				</div>
				<div className="project">
					<img src="/images/project_3.png" className="img_project"/>
					<h3>3.Ecommerce</h3>
					<div className="header-action-aria">
						<a href="" className="btn">Github</a>
						<a href="" className="btn">Live Demo</a>
					</div>
				</div>
			</div>
		</section>
	)
}

export default project;