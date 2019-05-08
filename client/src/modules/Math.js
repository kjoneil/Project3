import React from "react";
import Model1 from "./quiz.js";
import { withAuthorization } from "../component/Session/index.js";
// import builtinModules from "../modules/modules";

const MathPage = () => {
  var mathQuestions = [
    
    {
      questionUrl:
        "https://www.teachstarter.com/wp-content/uploads/2016/08/9.1.png",
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
      answer: "C",
      choices: ["A", "B", "C", "D"]
    }
  ];

  return (
    <div>
      <h2>Brainteaser!</h2>
      <p>How many Blocks are there in this Picture?</p>
      <Model1 questions={mathQuestions} />
    </div>
  );
};
const condition = authUser => !!authUser;

export default withAuthorization(condition)(MathPage);
