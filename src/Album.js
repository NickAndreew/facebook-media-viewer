// import React from 'react';
// import AlbumsAPI from './AlbumsAPI';
// import {Link} from 'react-router-dom';

// const Album = (props) => {
//     const albumId = props.match.params.id;
//     const albumName = props.match.params.name;
      
//     return (
//         <div>
//             <h1>{albumName} (#{albumId})</h1>
//             <Link to='/albums'><h4 className="h4Cl">Back</h4></Link>
//         </div>
//     )
// }   

// export default Album;


import React, {Component} from 'react';
import AlbumsAPI from './AlbumsAPI';
import {Link} from 'react-router-dom';

class Album extends Component {
    constructor(props) {
		super(props);
    }
    
    render (){
        return (
            <div>
                <h1>{this.props.match.params.name} (#{this.props.match.params.id})</h1>
                <Link to='/albums'><h4 className="h4Cl">Back</h4></Link>
            </div>
        )
    }
}   

export default Album;