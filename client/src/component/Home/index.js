import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import { withAuthorization } from '../Session';

const HomePage = () => (
  <div>
<<<<<<< HEAD
    <div>
    <Card>
        <CardImg top width="100%" src="https://t1.ftcdn.net/jpg/01/90/64/10/400_F_190641028_3JgI4YpJOQbZa49SEi88y55W4axQfgbY.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>  
=======
    <h2>Home Page</h2>
    <p>The Home Page is accessible by every signed in user.</p>
>>>>>>> 620d37b0586498ff695096f76d1d63ffeef93576
  </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);