import React, {Component} from 'react';
import AlbumsAPI from './AlbumsAPI';
import {Link} from 'react-router-dom';

class Album extends Component {
    constructor(props) {
		super(props);
		this.state = {
		}
    }
    
    render (){
        return (
            <div>
                <h1>{this.props.name} (#{this.props.id})</h1>
                <Link to='/albums'><h4 className="h4Cl">Back</h4></Link>
            </div>
        )
    }
}   

export default Album;