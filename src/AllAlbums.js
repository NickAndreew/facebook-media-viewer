import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class AllAlbums extends Component {
    constructor(props) {
		super(props);
		this.state = {
            albums: []
        }
        
        // this.getAlbumCover = this.getAlbumCover.bind(this);
    }
    
    async componentDidMount(){
        window.FB.api('/me?fields=albums', function(resp) {
            
            console.log(resp);
            
            var albumsList = [];

            for (var i=0 ; i <= resp.albums.data.length-1 ; i++) {
                var data = resp.albums.data[i];
                var id = data.id;
                console.log(id);
                
                var cover = '';

                // const responce = window.FB.api('/'+id+'/picture?redirect=false', async function(response){                   
                //     return response.data.url;
                // });
                cover = await this.getAlbumCover(id);
                console.log(cover);

                albumsList.push({data, cover});

            }

            console.log(albumsList);
            this.setState({ albums : albumsList });
        
        }.bind(this));

        const value = await this.state.albums;
        console.log(value);

    }

    async getAlbumCover(id){
        var url = '';
        window.FB.api('/'+id+'/picture?redirect=false', function(response){
            url = response.data.url;
            console.log(url);
            return url;
        })
    }

    render() {
        if(this.state.albums!==""){
            return (
                console.log(this.state.albums),
                <div>
                    <div>
                        <div className="albumsDiv"> 
                            {
                                this.state.albums.map(a => (
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