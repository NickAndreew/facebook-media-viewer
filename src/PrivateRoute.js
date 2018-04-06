import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'

const PrivateRoute = ({ component: Component }) => (
    <Route {...rest} render={(props) => (
      fakeAuth.isAuthenticated === true
        ? <Component />
        : <Redirect to='/login' />
    )} />
  )