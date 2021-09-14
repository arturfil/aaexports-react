import { Component } from 'react'
import { Redirect, Route } from 'react-router'
import { isAuthenticated } from '../services/authService'
import LoginView from '../views/LoginView'

const AuthRoute = ({component: Component, ...rest}) => {
  return (
    <Route {...rest}  render={props => isAuthenticated() ? (
      <Component {...props} />
    ) : (
      <Route pathname="/login" component={LoginView} />
    )} />
  )
}

export default AuthRoute
