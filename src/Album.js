import React from 'react';
import AlbumsAPI from './AlbumsAPI';
import {Link} from 'react-router-dom';

const Album = (props) => {
    const album = AlbumsAPI.get(
        parseInt(props.match.params.number, 10)
    )

    if (!album) {
        return <div>Sorry, but the album was not found</div>
    }
      
    return (
        <div>
            <h1>{album.name} (#{album.number})</h1>
            <Link to='/albums'><h4 className="h4Cl">Back</h4></Link>
        </div>
    )
}   

export default Album;