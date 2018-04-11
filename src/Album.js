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
            if(resp.name!=''){
                var name = resp.name;
                this.setState({albumName: name});
            } else {
                this.setState({albumName: 'Undefined'});
            }
        }.bind(this));

        this.loadAlbumContent();
    }

    loadAlbumContent(){
        var photosList = [];

        window.FB.api('/'+this.props.match.params.id+'/photos', function(resp){
            
            // console.log(resp.data);
            for(var i=0 ; i <= resp.data.length-1 ; i++){
                window.FB.api('/'+resp.data[i].id+'/picture?redirect=false', function(response){
                    if(response.data.url!=''){
                        var url = response.data.url;
                        photosList.push(response.data.url);
                    } else {
                        photosList.push('');
                    }
                }.bind(this));
            }

            this.setState({photos: photosList});
        }.bind(this));

    }
    
    render (){
        if(this.state.albumName!=""){
            console.log(this.state.albumName);
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