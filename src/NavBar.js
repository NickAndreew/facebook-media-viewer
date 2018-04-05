import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = () => (
    <div className="navbarCl">
		<div className="navBarImg">
			<h1 className="navBarTitle">facebook media viewer</h1>
		</div>
        <nav>
			<ul>
				<li><NavLink exact to='/profile'>Profile</NavLink></li>
				<li><NavLink exact to='/albums'>Albums</NavLink></li>
				<li><NavLink exact to='/upload'>Upload</NavLink></li>
				<li><a className="logoutButton"><span className="glyphicon glyphicon-user"></span>Log Out</a></li>
			</ul>
      	</nav>
    </div>
);

export default NavBar;  