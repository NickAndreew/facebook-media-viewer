import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import AllAlbums from './AllAlbums';
import Album from './Album';
import NavBar from './NavBar';

class Albums extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <div>ALBUMS</div>
                <Switch>
                    <Route exact path='/albums' component={AllAlbums} />
                    <Route path='/albums/:id' component={Album} />
                </Switch>
            </div>
        );
    }
}

export default Albums;