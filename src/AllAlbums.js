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
                const data = resp.albums.data[i];
                var id = data.id;
                console.log(id);
                
                var cover = '';

                window.FB.api('/'+id+'/picture?redirect=false', function(response){
                    if(response.data.url!=''){
                        cover = response.data.url;
                        albumsList.push({data: data, cover: cover});
                    }
                })
            }

            
            console.log(albumsList);
            this.setState({ albums : albumsList });
        
        }.bind(this));
    }

    // getAlbumCover(id){
    //     var url = '';
    //     window.FB.api('/'+id+'/picture?redirect=false', function(response){
    //         if(response.data.url!=''){
    //             return response.data.url;
    //         }
    //     })
    //     console.log(url);
    //     return url;
    // }

    render() {
        if(await this.state.albums!==""){
            console.log(this.state.albums)
            return (
                <div>
                    <div>
                        <div className="albumsDiv"> 
                            {
                                this.state.albums.map(a => (
                                    console.log(a),
                                    <div className="albumCover" key={a.data.id} id={a.data.id} style={{backgroundImage: 'url('+a.cover+')'}}>
                                        <Link to={`/albums/${a.data.id}`} params={{name:a.data.name}}>
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