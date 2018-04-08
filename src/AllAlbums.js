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
                
                obj.cover = this.getAlbumCover(resp.albums.data[i].id);
                console.log(this.getAlbumCover(resp.albums.data[i].id));
                console.log(obj);
                albumsList.push(obj);
            }

            this.setState({ albums : albumsList });
        }.bind(this));
    }

    getAlbumCover(id){
        var url = '';
        window.FB.api('/'+id+'/picture?redirect=false', function(response){
            url = response.data.url;
        }.bind(this))
        return url;
    }

    render() {
        if(this.state.albums!==""){
            return (
                <div>
                    <div>
                        <div className="albumsDiv"> 
                            {
                                this.state.albums.map(a => (
                                    console.log(a.cover),
                                    <div className="albumCover" key={a.data.id} id={a.data.id} style={{backgroundImage: 'url('+a.cover+')'}}>
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