import React, {Component} from 'react';
import AlbumsAPI from './AlbumsAPI';
import {Link} from 'react-router-dom';

class Album extends Component {
    constructor(props) {
        super(props);
        this.state = {
            albumName: "",
            photos: []
        }
        
        this.loadAlbumContent = this.loadAlbumContent.bind(this);

    }

    componentDidMount(){
        window.FB.api('/'+this.props.match.params.id, function(resp){
            this.setState({albumName: resp.name});
        }.bind(this));

        this.loadAlbumContent();
    }

    loadAlbumContent(){
        window.FB.api('/'+this.props.match.params.id+'/photos', function(resp){
            var photosList = [];
            console.log(resp);
            for(var i=0 ; i <= resp.data.length ; i++){
                window.FB.api('/'+resp.data[i].id+'/picture', function(response){
                    photosList.push(response.data.url);
                }.bind(this));
            }

            this.setState({photos: photosList});
        }.bind(this));
    }
    
    render (){
        return (
            <div>
                <h1>{this.state.albumName}</h1>
                <Link to='/albums'><h4 className="h4Cl">Back</h4></Link>
                <div className="albumsDiv">
                    {
                        this.state.photos.map(a => (
                            <div className="albumCover" key={a} style={"background-image:url("+a+")"}>
                                
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}   

export default Album;