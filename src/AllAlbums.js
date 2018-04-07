import React, { Component } from 'react';
import AlbumsAPI from './AlbumsAPI';
import {Link} from 'react-router-dom';

class AllAlbums extends Component {
    constructor(props) {
		super(props);
		this.state = {
            albums: [],
            albumCovers:[]
		}
    }
    
    componentDidMount(){
        window.FB.api('/me?fields=albums',  function(resp) {
            console.log(resp.albums.data);
            
            var albumsList = [];
            var coversList = [];
            
            for (var i=0 ; i <= resp.albums.data.length-1 ; i++) {
                albumsList.push(resp.albums.data[i]);
                // window.FB.api('/'+resp.albums.data[i].id+'/picture', function(responce){
                //     coversList.push(responce.data.url);
                // }.bind(this));
            }

            this.setState({albums:albumsList, albumCovers:coversList});
        }.bind(this));
    }

    render() {
        if(this.state.albumCovers!==""){
            console.log(this.state.albumCovers);
            return (
                <div>
                    <div>
                        <div className="albumsDiv"> 
                            {
                                this.state.albums.map(a => (
                                    <div className="albumCover" key={a.id} id={a.id}>
                                        <Link to={`/albums/${a.id}`} params={{name:a.name, id:a.id }}>
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
        } else {
            return null;
        }
    }
};

export default AllAlbums;