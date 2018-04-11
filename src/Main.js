import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import Profile from './Profile';
import Albums from './Albums';
import Upload from './Upload';
import Login from './Login';
import ProtectedRoute from 'react-router-protected-route';

class Main extends Component {
    constructor(props) {
		super(props);
		this.state = {
            response: {},
            status: ""
        };
    }
    
    componentDidMount(){
        window.fbAsyncInit = function() {

			window.FB.init({
                appId      : '165205184192174',
                cookie     : true,
                xfbml      : true,
                version    : 'v2.12'
            });
			
            console.log("component did mount func runs");
            window.FB.getLoginStatus(function(response) {

                if(response.status === "connected"){
                    console.log("user is logged in");
                    this.setState({status: true});
                } else {
                    console.log("user is not logged in");
                    this.setState({status: false});
                }

            }.bind(this));
        }.bind(this);
        
        (function(d, s, id){
			var js, fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) return;
			js = d.createElement(s);
			js.id = id;
			js.src = "https://connect.facebook.net/en_US/sdk.js";
			fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

    }

    render(){
        console.log(this.state.status);
        if(this.state.status!==""){
            return (
                <Switch>
                    <Route path='/login' component={Login}></Route>
                    <ProtectedRoute isAccessible={this.state.status} redirectToPath='/login' exact path='/' component={Profile}></ProtectedRoute>
                    <ProtectedRoute isAccessible={this.state.status} redirectToPath='/login' path='/albums' component={Albums}></ProtectedRoute>
                    <ProtectedRoute isAccessible={this.state.status} redirectToPath='/login' path='/upload' component={Upload}></ProtectedRoute>
                </Switch>
            )
        } else {
            return null;
        }
    }
};

export default Main;