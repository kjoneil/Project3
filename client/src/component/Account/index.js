import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import {AuthUserContext, withAuthorization} from '../Session';
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import {Comments} from '../wuzzles';

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
  <div>
    <h2>Account: {authUser.email}</h2>
    <br></br>
    <PasswordForgetForm />
    <br></br>
    <PasswordChangeForm />
    <br></br>
    <Comments/>
  </div>
    )}
    </AuthUserContext.Consumer>
    
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);