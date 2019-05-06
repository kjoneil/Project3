import React from 'react';

import { withAuthorization } from '../Session';

const HomePage = () => (
  <div>
    <h1>Home Page</h1>
    <div>
      <img src= "image1.jpg" alt="dots"></img>
    </div>
      
    
  </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);