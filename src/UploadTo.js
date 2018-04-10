import React, {Component} from 'react';
import AlbumsAPI from './AlbumsAPI';
import {Link} from 'react-router-dom';

class UploadTo extends Component {
    constructor(props) {
		super(props);
		this.state = {
            albums: []
        }
    }

    componentDidMount(){
        window.FB.api('/me?fields=albums', function(resp) {
            
            var albumsList = [];

            for (var i=0 ; i <= resp.albums.data.length-1 ; i++) {
                var data = resp.albums.data[i];
                albumsList.push(data);
            }

            console.log(albumsList);
            this.setState({ albums : albumsList });
        
        }.bind(this));
    }
    
    render() {
        return (
            <div>
                {
                    this.state.albums.map(a => (
                    <div key={a.id}>
                        <Link to={`/upload/${a.id}`}>
                            <h3 className="h4Cl">{a.name}</h3>    
                        </Link>
                    </div>
                    ))
                }
            </div>
        )
    }
}

export default UploadTo;