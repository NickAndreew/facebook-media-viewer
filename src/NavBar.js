import React, {Component} from 'react';
import {NavLink, Redirect} from 'react-router-dom';

class NavBar extends Component{
	constructor(props) {
		super(props);
		this.state = {		
		};

		this.logoutFunction = this.logoutFunction.bind(this);
	}

	logoutFunction() {
		window.FB.logout(function(response) {
			console.log("function Log Out Runs");
			window.location.href = "https://facebook-media-viewer.herokuapp.com/login";
		});
	}
	
	render(){
		return (
			<div className="navbarCl">
				<div className="navBarImg">
					<h1 className="navBarTitle">facebook media viewer</h1>
				</div>
				<nav>
					<ul>
						<li><NavLink exact to='/profile'>Profile</NavLink></li>
						<li><NavLink exact to='/albums'>Albums</NavLink></li>
						<li><NavLink exact to='/upload'>Upload</NavLink></li>
						<li><a className="logoutButton" onClick={ this.logoutFunction }><span className="glyphicon glyphicon-user"></span>Log Out</a></li>
					</ul>
				</nav>
			</div>
		);
	}
};

export default NavBar;  