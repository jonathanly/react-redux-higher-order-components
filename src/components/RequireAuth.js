import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    props.authenticated ? (
      <Redirect to='/' />
    ) : (
      <Component {...props}/>
    )
    //
    // )
  )}/>
)

function mapStateToProps(state) {
  return { authenticated: state.authenticated };
}

export default connect(mapStateToProps)(PrivateRoute);

{/* <Route {...rest} render={props => (
  fakeAuth.isAuthenticated ? (
    <Component {...props}/>
  ) : (
    <Redirect to={{
      pathname: '/',
      state: { from: props.location }
    }}/>
  )
)}/> */}
