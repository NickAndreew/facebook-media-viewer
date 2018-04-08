import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class AllAlbums extends Component {
    constructor(props) {
		super(props);
		this.state = {
            albums: []
		}
    }
    
    componentDidMount(){
        window.FB.api('/me?fields=albums',  function(resp) {
            console.log(resp.albums.data);
            
            var albumsList = [];

            
            for (var i=0 ; i <= resp.albums.data.length-1 ; i++) {
                var obj = {data:'', cover: ''};
                obj.data = resp.albums.data[i];
                window.FB.api('/'+resp.albums.data[i].id+'/picture?redirect=false', function(responce){
                    console.log(responce);
                    obj.cover = responce.data.url;
                }.bind(this));
                albumsList.push(obj);
            }

            this.setState({ albums : albumsList });
        }.bind(this));
    }

    render() {
        if(this.state.albums!==""){
            console.log(this.state.albums);
            return (
                <div>
                    <div>
                        <div className="albumsDiv"> 
                            {
                                this.state.albums.map(a => (
                                    <div className="albumCover" key={a.data.id} id={a.data.id}>
                                        <Link to={`/albums/${a.data.id}`} params={{name:a.data.name, id:a.data.id }}>
                                            <div className="albumOnHover">
                                                <div className="albumOnHoverClick">
                                                    <h3>{a.data.name}</h3>
                                                    <p>{a.data.created_time}</p>
                                                </div>
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