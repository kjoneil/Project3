import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Title from "../Title";
import Navigation from "../Navigation";
import LandingPage from "../Landing";
import SignUpPage from "../SignUp";
import SignInPage from "../SignIn";
import PasswordForgetPage from "../PasswordForget";
import HomePage from "../Home";
import AccountPage from "../Account";
import AdminPage from "../Admin";

import MathPage from "../../modules/Math.js";
import Reading from "../../modules/Reading.js";
import SocialStudies from "../../modules/SocialStudies.js";
import * as ROUTES from "../../constants/routes";
import { withAuthentication } from "../Session";

const App = () => (
  <Router>
    <div>
      <Navigation />

      <hr />

      <Title />

      <hr />
      <Route exact path={"/math"} component={MathPage} />
      <Route exact path={"/reading"} component={Reading} />
      <Route exact path={"/socialstudies"} component={SocialStudies} />
      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route
        exact
        path={ROUTES.PASSWORD_FORGET}
        component={PasswordForgetPage}
      />
      <Route exact path={ROUTES.HOME} component={HomePage} />
      <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route exact path={ROUTES.ADMIN} component={AdminPage} />
    </div>
  </Router>
);

export default withAuthentication(App);
