import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Profile from './Profile';
import Albums from './Albums';
import Upload from './Upload';
import Login from './Login';

const Main = () => (
    <Switch>
        <Route exact path='/login' component={Login}></Route>
        <Route exact path='/profile' component={Profile}></Route>
        <Route path='/albums' component={Albums}></Route>
        <Route path='/upload' component={Upload}></Route>
    </Switch>
);

export default Main;