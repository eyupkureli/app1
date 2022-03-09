import React, { Component } from "react";
import Component1 from "./containers/Component1";
import Component2 from "./containers/Component2";
import Component3 from "./containers/Component3";
import Container2 from "./containers/Container2";
import Header from "./functionals/Header";
import Callback from "./functionals/callback";
import { Router, Route, Switch, Redirect } from "react-router";
import { connect } from "react-redux";
import history from "./utils/history";
import Auth from "./utils/auth";
import Authcheck from "./utils/authcheck";
import UnauthRedirect from "./functionals/unauthredirect";
import ProtectedRoute from "./functionals/protectedroute";
import Profile from "./containers/profile";
import * as ACTIONS from "./store/actions/actions";

const auth = new Auth();

const handleAuthentication = (props) => {
  if (props.location.hash) {
    auth.handleAuth();
  }
};

const PrivateRoute = ({ component: Component, auth }) => {
  <Route
    render={(props) =>
      auth.isAuthenticated() === true ? (
        <Component auth={auth} {...props} />
      ) : (
        <Redirect to={{ pathname: "/redirect" }} />
      )
    }
  />;
};

class Routes extends Component {
  componentDidMount() {
    if (auth.isAuthenticated()) {
      this.props.login_success();
      auth.getProfile();
      setTimeout(() => {
        this.props.add_profile(auth.userProfile);
      }, 2000);
    } else {
      this.props.login_failure();
      this.props.remove_profile();
    }
  }
  render() {
    return (
      <Router history={history}>
        <div>
          <Header auth={auth} />
          <Switch>
            <Route exact path="/" render={() => <Container2 auth={auth} />} />
            <Route path="/authckeck" render={() => <Authcheck auth={auth} />} />
            <Route path="/redirect" component={UnauthRedirect} />
            <Route
              path="/callback"
              render={(props) => {
                handleAuthentication(props);
                return <Callback />;
              }}
            />
            <Route
              path="/component1"
              render={(props) => (
                <div>
                  <Component1 {...props} />
                </div>
              )}
            />
            <Route path="/component2" component={Component2} />
            <Route path="/component3" component={Component3} />
            <PrivateRoute
              path="/privateroute"
              auth={auth}
              component={ProtectedRoute}
            />
            <PrivateRoute path="/profile" auth={auth} component={Profile} />
          </Switch>
        </div>
      </Router>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    login_success: () => dispatch(ACTIONS.login_success()),
    login_failure: () => dispatch(ACTIONS.login_failure()),
    add_profile: (profile) => dispatch(ACTIONS.add_profile(profile)),
    remove_profile: () => dispatch(ACTIONS.remove_profile()),
  };
}

export default connect(null, mapDispatchToProps)(Routes);
