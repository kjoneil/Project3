import React, { Component } from "react";
// import modules from "../modules/modules";
import update from "immutability-helper";

class Quiz extends Component {
  state = {
    q1: this.props.questions[0],
    q2: this.props.questions[1],
    q3: this.props.questions[2]
  };
  handleRadioClick = (value, choiceNum, questionNum) => {
    console.log("this is our click!!", value);
    console.log("this is our choice number", choiceNum);
    console.log("this is our questions number!!", questionNum);

    const answer = this.state[questionNum].answer;
    const choices = this.state[questionNum].choices;
    const questionUrl = this.state[questionNum].questionUrl;
    // const description = this.state[questionNum].description;
    this.setState({
      [questionNum]: {
        selectedAnswer: value,
        selectedOption: choiceNum,
        answer,
        choices,
        questionUrl
        // description
      }
    });
  };

  createQuestions = () => {
    var questions = [];

    var self = this;

    Object.keys(this.state).map(function(key, index) {
      console.log("this is our key!!", key);
      questions.push(
        <div>
          <img src={self.state[key].questionUrl} />
          {self.state[key].choices.map((singleChoice, i) => {
            return (
              <div>
                {/* <h3>{description}</h3> */}
                <input
                  type="radio"
                  value={singleChoice}
                  // checked={this.state.question1.selectedOption === "option2"}
                  onChange={() => {
                    self.handleRadioClick(singleChoice, i, key);
                  }}
                />
                {singleChoice}
              </div>
            );
          })}
        </div>
      );
    });

    return questions;
  };

  render() {
    console.log("THIS IS OUR STATE!!!", this.state);
    return (
      <div>
        <h2>Modules</h2>
        {this.createQuestions()}
      </div>
    );
  }
}
export default Quiz;
