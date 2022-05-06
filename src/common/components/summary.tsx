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
          <h4 className="answerone">
            There is always a room to grow. Password management and two-factor
            authentication are valuable means of providing security for smart
            devices. We highly recommend searching for more information about
            them and following security guidelines for creating and managing
            passwords.
          </h4>
        </div>
      )}
      {score > 0.3 && score <= 0.7 && (
        <div className="answertwo">
          <h4 className="answertwo">
            This is a good start! Although passwords can be difficult to manage
            sometimes, we highly recommend following security guidelines to
            ensure the appropriate level of security for smart devices.
          </h4>
        </div>
      )}
      {score > 0.7 && (
        <div className="answerthree">
          <h4 className="answerthree">
            Good! Remember to keep following security guidelines for creating
            passwords and using two-factor authentication for every device you
            have (when it is applicable).
          </h4>
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
