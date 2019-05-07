import React from 'react';

import {AuthUserContext, withAuthorization} from '../Session';
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
  <div>
    <h2>Account: {authUser.email}</h2>
    <br></br>
    <PasswordForgetForm />
    <br></br>
    <PasswordChangeForm />
  </div>
    )}
    </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);