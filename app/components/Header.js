import React from "react";


export default class Header extends React.Component{

handleChange(e){
	console.log(e);
	const title = e.target.value;
	this.props.changeTitle(title);
}

	render(){
		return(
			<div>
				<h1>{this.props.title}</h1>
				<header>header</header>
				<input value={this.props.title} onChange={this.handleChange.bind(this)}/>
			</div>
		);
	}
}