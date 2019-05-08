import React from "react";
import { Card, Button, CardTitle, CardText } from "reactstrap";
import logo from "../component/Landing/noon-good.jpg";
import photo from "../component/Landing/line-read-line.jpg";

const Example = props => {
  return (
    <div>
      <div>
        <p>Wuzzles are picture riddles that have a hidden meaning.</p>
        <p>
          The picture could be a catch phrase, common saying or compound word.
        </p>
      </div>{" "}
      <div className="wuzzle">
        <Card body inverse color="success">
          <CardTitle>Wuzzle #1</CardTitle>
          <img src={logo} alt="wuzzle" />
          <CardText>Hint: It's similar to saying hello. </CardText>
        </Card>
        <Card body inverse color="danger">
          <CardTitle>Wuzzle #2</CardTitle>
          <img src={photo} alt="wuzzle2" />
          <CardText>Hint: Think between the lines.</CardText>
        </Card>{" "}
      </div>
      <div>
        <h6>Answers</h6>
        <p>Wuzzle #1: Good AfterNoon</p>
        <p>Wuzzle #2: Read Between the lines</p>
      </div>
    </div>
  );
};

export default Example;
