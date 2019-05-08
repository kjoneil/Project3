import React from "react";
import Quiz from "./quiz.js";
import { withAuthorization } from "../component/Session/index.js";
// import builtinModules from "../modules/modules";

const ReadingPage = () => {
  var readingQuestions = [
    {
      questionUrl:
        "https://www.teachstarter.com/wp-content/uploads/2016/08/8.1.png",
      answer: 9,
      choices: [7, 8, 9, 10],
      selectedOption: null,
      selectedAnswer: null
    },
    {
      questionUrl:
        "https://www.teachstarter.com/wp-content/uploads/2016/08/9.1.png",
      answer: 44,
      choices: [55, 44, 33, 22],
      selectedOption: null,
      selectedAnswer: null
    },
    {
      questionUrl:
        "https://www.teachstarter.com/wp-content/uploads/2016/08/1.1.png",
      answer: "C",
      choices: ["A", "B", "C", "D"],
      selectedOption: null,
      selectedAnswer: null
    }
  ];

  return (
    <div>
      <h2>Brain Teasers!</h2>
      <p>How many triangles are in the image below?</p>
      <Quiz questions={readingQuestions} />
    </div>
  );
};
const condition = authUser => !!authUser;

export default withAuthorization(condition)(ReadingPage);
