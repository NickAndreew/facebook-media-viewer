import React, {Component} from 'react';
import NavBar from './NavBar';
import DropFiles from './DropFiles';
import UploadTo from './UploadTo';
import {Switch, Route} from 'react-router-dom';

class Upload extends Component {
    render(){
        return (
            <div>
                <NavBar />
                <div>UPLOAD</div>
                <Switch>
                    <Route exact path='/upload' component={UploadTo} />
                    <Route path='/upload/:id' component={DropFiles} />
                </Switch>
            </div>
        )
    }
};

export default Upload;