import React, { Component } from 'react';
import AlbumsAPI from './AlbumsAPI';
import {Link} from 'react-router-dom';

class AllAlbums extends Component {
    render() {
        return (
            <div>
                <div>
                    <div className="albumsDiv"> 
                        {
                            AlbumsAPI.all().map(a => (
                            
                            <div className="albumCover" key={a.number}>
                                <Link to={`/albums/${a.number}`}>
                                    <div className="albumOnHover">
                                        <a className="albumOnHoverClick">
                                            <h3>{a.name}</h3>
                                            <p>Album Title</p>
                                        </a>
                                    </div>
                                </Link>
                            </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
};

export default AllAlbums;