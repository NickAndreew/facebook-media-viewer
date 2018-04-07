import React, {Component} from 'react';
import NavBar from './NavBar';

class Profile extends Component {

    componentDidMount(){
        window.FB.api('/me?fields=id,name,birthday,location,hometown,cover,picture.width(200)',  function(resp) {
            console.log(resp);
            document.getElementById("profileName").textContent = resp.name;
            document.getElementById("birthdayDate").textContent = "Birthday date: "+resp.birthday;
            document.getElementById("currentCity").textContent = "Current city:  "+resp.location.name;
            document.getElementById("hometown").textContent = "Hometown: "+resp.hometown.name;
            document.getElementById("profilePic").setAttribute("src", resp.picture.data.url);
        });
    }

    render(){
        return(
            <div>
                <NavBar />
                <div>PROFILE</div>
                <div className="profilePage">
                    <div>
                        <img src="https://i.imgur.com/6oDNbeN.gif" alt="" id="profilePic" />
                    </div>
                    <div className="profileInfo">
                        <h1 className="infoH1" id="profileName">Firstname Lastname</h1>
                        <h4 className="infoH4" id="birthdayDate">Birthday</h4>
                        <h4 className="infoH4" id="currentCity">Current City</h4>
                        <h4 className="infoH4" id="hometown">Hometown</h4>
                    </div>
                </div>
            </div>
        );
    }
};

export default Profile;