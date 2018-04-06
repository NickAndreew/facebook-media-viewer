import React, {Component} from 'react';

class Login extends Component {
    constructor(props) {
		super(props);
		this.state = {
            status:""		
		};

		this.loginFunction = this.loginFunction.bind(this);
    }
    
    loginFunction() {
		window.FB.login(function(response){
			console.log("function Log In Runs");
			console.log(response);
			window.location.href = "https://facebook-media-viewer.herokuapp.com/profile";
		});
	}

    render(){
        return (
            <div className="loginBackDiv">
                <div className="loginFormCl">
                    <div className="logInTexts">
                        <h3 className="logInText">Login</h3>
                        <p className="logInText">This web site is designed for Facebook Users only.</p>
                        <img src="https://i.imgur.com/6oDNbeN.gif" className="logoCl" alt="" />
                    </div>
                    <div>
                        <button className="" onClick={ this.loginFunction } >Login</button>
                    </div>
                </div>
            </div>
        );
    }
};

export default Login;