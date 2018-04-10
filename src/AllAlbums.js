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
        var albumsData = [];

        window.FB.api('/me?fields=albums', function(resp) {

            for (var i=0 ; i <= resp.albums.data.length-1 ; i++) {
                var data = resp.albums.data[i];
                var id = data.id;
                console.log(id);
                
                var cover = '';

                // const responce = window.FB.api('/'+id+'/picture?redirect=false', async function(response){                   
                //     return response.data.url;
                // });
                console.log();

                albumsData.push({data, cover});

            }

            // console.log(albumsList);
            // this.setState({ albums : albumsList });
        
        }.bind(this));

        var albumCovers = []
        for(var i=0; i <= albumsData.length-1 ;i++){
            var id = albumsData[i].data.id;
            window.FB.api('/'+id+'/picture?redirect=false', function(response){
                albumCovers.push(response.data.url);
            })
        }

        console.log(albumsData);
        console.log(albumCovers);

    }

    // async getAlbumCover(id){
    //     var url = '';
    //     window.FB.api('/'+id+'/picture?redirect=false', function(response){
    //         url = response.data.url;
    //         console.log(url);
    //         return url;
    //     })
    // }

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