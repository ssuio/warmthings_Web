import React from "react";


export default class Chicken extends React.Component{

	render(){
		console.log(this.props);
		return(
			<div>
				<h1>Chicken</h1>
				<p>So in a nutshell (or an eggshell, if you like), two birds that weren't<br />
				 really chickens created a chicken egg, and hence, we have an answer: The<br />
				 egg came first, and then it hatched a chicken. Maybe the question we should<br />
				  be asking is: Which came first, the proto-chicken or the proto-chicken egg?</p>
			</div>
		);
	}
}