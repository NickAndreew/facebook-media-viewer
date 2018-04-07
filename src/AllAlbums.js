import React, { Component } from 'react';
import AlbumsAPI from './AlbumsAPI';
import {Link} from 'react-router-dom';

class AllAlbums extends Component {
    constructor(props) {
		super(props);
		this.state = {
			albums: [],
		}
    }
    
    componentDidMount(){
        window.FB.api('/me?fields=albums',  function(resp) {
            console.log(resp.albums.data);
            var albumsList = [];
            for (var i=0; i <= resp.albums.data.length-1 ;i++) {
                albumsList.push(resp.albums.data[i]);
            }
            this.setState({albums:albumsList});
        }.bind(this));
    }

    render() {
        return (
            <div>
                <div>
                    <div className="albumsDiv"> 
                        {
                            this.state.albums.map(a => (
                            
                            <div className="albumCover" key={a.id}>
                                <Link to={`/albums/${a.id}`}>
                                    <div className="albumOnHover">
                                        <a className="albumOnHoverClick">
                                            <h3>{a.name}</h3>
                                            <p>{a.created_time}</p>
                                        </a>
                                    </div>
                                </Link>
                            </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
};

export default AllAlbums;