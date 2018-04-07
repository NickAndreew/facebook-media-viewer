import React, {Component} from 'react';
import AlbumsAPI from './AlbumsAPI';
import {Link} from 'react-router-dom';

class Album extends Component {
    constructor(props) {
        super(props);
        this.state = {
            albumName: "",
            photos: ""
        }
        this.loadAlbumContent = this.loadAlbumContent.bind(this);
    }

    componentWillMount(){
        window.FB.api('/'+this.props.match.params.id, function(resp){
            this.setState({albumName: resp.name});
        }.bind(this));

        this.loadAlbumContent();
    }

    loadAlbumContent(){
        window.FB.api('/'+this.props.match.params.id+'/photos', function(resp){
            var photosList = [];
            console.log(resp.data);
            for(var i=0 ; i <= resp.data.length-1 ; i++){
                window.FB.api('/'+resp.data[i].id+'/picture?redirect=false', function(response){
                    // console.log(response.data.url);
                    photosList.push(response.data.url);
                }.bind(this));
            }

            this.setState({photos: photosList});
        }.bind(this));
    }
    
    render (){
        console.log(this.state.photos);
        
        if(this.state.photos.length>0){
            console.log(this.state.photos);
            return (
                <div>
                    <h1>{this.state.albumName}</h1>
                    <Link to='/albums'><h4 className="h4Cl">Back</h4></Link>
                    <div className="albumsDiv">
                        {
                            this.state.photos.map(a => (
                                <div className="albumCover" key={a} style={{ backgroundImage : "url("+a+")" }}>
                                    
                                </div>
                            ))
                        }
                    </div>
                </div>
            )
        } else {
            return null;
        }
    }
}   

export default Album;