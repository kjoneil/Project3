import React from 'react';

import { withAuthorization } from '../Session';

const HomePage = () => (
  <div>
    <h2>Welcome to WonderBooks!</h2>
    <h4>The #1 site for educational children interactive modules, stories, and more!</h4>
  </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);