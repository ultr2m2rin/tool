import { useNavigate } from "react-router-dom";

import { RouteNames } from "../../App";
import { useGlobalState } from "../store/score-context";

import "./summary.css";

export default function Summary() {
  const { state, setState } = useGlobalState();

  return (
    <div>
      <h3 className="score">
        Your score is {state.score} out of {state.totalQuestions}
      </h3>
      <ScoreMessage />
      <br />
      <SecondQuiz />
    </div>
  );
}

function ScoreMessage() {
  const { state } = useGlobalState();
  const totalQuestions = state.totalQuestions ?? 1;
  const score = state.score / totalQuestions;

  return (
    <>
      {score >= 0 && score <= 0.3 && (
        <div className="answerone">
          <h3 className="answerone">answer 1</h3>
        </div>
      )}
      {score > 0.3 && score <= 0.7 && (
        <div className="answertwo">
          <h3 className="answertwo">answer 2</h3>
        </div>
      )}
      {score > 0.7 && (
        <div className="answerthree">
          <h3 className="answerthree">answer 3</h3>
        </div>
      )}
    </>
  );
}

export function SecondQuiz() {
  const navigate = useNavigate();
  const { setState } = useGlobalState();

  const nextSection = () => {
    navigate(`/${RouteNames.sectwo}`);
    setState(() => ({ score: 0, totalQuestions: 0 }));
  };

  return (
    <div className="quiz-button-container">
      <button className="button" onClick={() => nextSection()}>
        NEXT SECTION
      </button>
    </div>
  );
}
