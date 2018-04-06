import React, {Component} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Profile from './Profile';
import Albums from './Albums';
import Upload from './Upload';
import Login from './Login';

class Main extends Component {
    constructor(props) {
		super(props);
		this.state = {
            response: {},
            status: false
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
                // this.statusChangeCallback(response);
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
        

        // this.getLoginStatusFunction();
    }

    render(){
        if(!this.state.status){
            return (
                <Redirect to="/login" />
            );
        }
        return (
            <Switch>
                <Route exact path='/login' component={Login}></Route>
                <Route exact path='/profile' component={Profile}></Route>
                <Route path='/albums' component={Albums}></Route>
                <Route path='/upload' component={Upload}></Route>
            </Switch>
        )
    }

};

export default Main;