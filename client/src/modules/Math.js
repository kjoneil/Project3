import React from "react";
import Model1 from "./quiz.js";
import { withAuthorization } from "../component/Session/index.js";
// import builtinModules from "../modules/modules";
import "./css/Math.css";
const MathPage = () => {
  var mathQuestions = [
    {
      questionUrl:
        "https://www.teachstarter.com/wp-content/uploads/2016/08/9.1.png",
      description: "try your hardest",

      answer: 44,
      choices: [55, 44, 33, 22]
    },
    {
      questionUrl:
        "https://www.teachstarter.com/wp-content/uploads/2016/08/3.1.png",
      answer: 9,
      choices: [7, 8, 9, 10]
    },
    {
      questionUrl:
        "https://www.teachstarter.com/wp-content/uploads/2016/08/1.1.png",
      description: "try your hardest",

      answer: "C",
      choices: ["A", "B", "C", "D"]
    }
  ];

  return (
    <div>
      <div class="brainteaser">
        <h2>Brainteaser!</h2>
        <p>How many Blocks are there in this Picture?</p>
      </div>
      <Model1 questions={mathQuestions} />
      <div id="someDiv">
        <p id="Answer">Scroll Here For Answer</p>
        <span id="someElement">9</span>
      </div>
    </div>
  );
};
const condition = authUser => !!authUser;

export default withAuthorization(condition)(MathPage);
