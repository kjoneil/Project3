import React from 'react';
import {Button} from 'reactstrap';
import { withAuthorization } from '../Session';

const HomePage = () => (
  <div>
    <div>
    <Button color="danger" size="lg"block><h2>BrainTeasers</h2></Button>{' '}
    <Button color="primary" size="lg"block><h2>Fun Photos</h2> </Button>{' '}
    <Button color="success" size="lg"block><h2>More BrainTeasers</h2> </Button>{' '}

    </div>   
  </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);