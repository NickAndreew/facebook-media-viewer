import React, {Component} from 'react';
import AlbumsAPI from './AlbumsAPI';
import {Link} from 'react-router-dom';

class UploadTo extends Component {
    render() {
        return (
            <div>
                {
                    AlbumsAPI.all().map(a => (
                    <div key={a.number}>
                        <Link to={`/upload/${a.number}`}>
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