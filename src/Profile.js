import React, {Component} from 'react';
import NavBar from './NavBar';

class Profile extends Component {
    render(){
        return(
            <div>
                <NavBar />
                <div>PROFILE</div>
                <div className="profilePage">
                    <div>
                        <img src="https://i.imgur.com/6oDNbeN.gif" alt="" />
                    </div>
                    <div className="profileInfo">
                        <h1 className="infoH1">Firstname Lastname</h1>
                        <h4 className="infoH4">Birthday</h4>
                        <h4 className="infoH4">Current City</h4>
                        <h4 className="infoH4">Hometown</h4>
                    </div>
                </div>
            </div>
        );
    }
};

export default Profile;