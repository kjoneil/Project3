import React from "react";
import { Card, Button, CardTitle, CardText } from "reactstrap";
import logo from "./noon-good.jpg";
import photo from "./line-read-line.jpg";
// import "./Landing.css";
import "../../modules/css/Wuzzle.css";
const Example = props => {
  const myStyle = {
    containerStyle: {
      width: "80%",
      margin: "auto"
      // backgroundColor: this.state.checkout === true ? "green" : "yellow"
    },
    headerStyle: {
      width: "75%"
    },
    headerStyle: {
      width: "75%"
    }
  };
  return (
    <div>
      <div>
        <p>Wuzzles are picture riddles that have a hidden meaning.</p>
        <p>
          The picture could be a catch phrase, common saying or compound word.
        </p>
      </div>{" "}
      {/* <wrapper  id="wuzzleCards"> */}
      <div style={myStyle.containerStyle}>
        <div style={myStyle.headerStyle} className="wuzzle">
          <Card body inverse color="success">
            <CardTitle>Wuzzle #1</CardTitle>
            <img src={logo} alt="wuzzle" />
            <CardText>Hint: It's similar to saying hello. </CardText>
          </Card>
          <br />
          <Card body inverse color="danger">
            <CardTitle>Wuzzle #2</CardTitle>
            <img src={photo} alt="wuzzle2" />
            <CardText>Hint: Think between the lines.</CardText>
          </Card>{" "}
        </div>
      </div>
      {/* </wrapper> */}
      {/* <div>
        <h6>Answers</h6>
        <p>Wuzzle #1: Good AfterNoon</p>
        <p>Wuzzle #2: Read Between the lines</p>
      </div> */}
      <div id="someDiv">
        <p id="Answer">Scroll Here For Answers</p>
        <span id="someElement">
          #1 Good Afternoon, #2 Read Between the lines
        </span>
      </div>
    </div>
  );
};

export default Example;
