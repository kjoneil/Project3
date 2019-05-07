import React from "react";
import Model1 from "../../modules/quiz";
import { withAuthorization } from "../Session";
import { Link, withRouter } from "react-router-dom";
// import builtinModules from "../modules/modules";

const HomePage = () => {
  var mathQuestions = [
    {
      questionUrl:
        "https://www.teachstarter.com/wp-content/uploads/2016/08/3.1.png",
      answer: 9,
      choices: [7, 8, 9, 10]
    },
    {
      questionUrl:
        "https://www.teachstarter.com/wp-content/uploads/2016/08/9.1.png",
      answer: 44,
      choices: [55, 44, 33, 22]
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
      <h2>Home Page</h2>
      {/* <Model1 questions={mathQuestions} /> */}
      <p>The Home Page is accessible by every signed in user.</p>

      <Link to="/math">
        <button>Math Quiz</button>
      </Link>
      <Link to="/reading">
        <button>Reading Quiz</button>
      </Link>
    </div>
  );
};
const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);
