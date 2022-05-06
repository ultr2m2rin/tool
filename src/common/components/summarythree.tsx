import { useNavigate } from "react-router-dom";

import { RouteNames } from "../../App";
import { useGlobalState } from "../store/score-context";

export default function Summary() {
  const { state } = useGlobalState();

  return (
    <div>
      <h3 className="score">
        Your score is {state.score} out of {state.totalQuestions}
      </h3>
      <ScoreMessage />
      <br />
      <FullSummary />
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
            There is always a room to grow. We highly recommend reading all
            information about your devices capabilities and learn about their
            security characteristics. It is valuable to know what actions you
            can take to ensure that a device is secure on your end.
          </h4>
        </div>
      )}
      {score > 0.3 && score <= 0.7 && (
        <div className="answertwo">
          <h4 className="answertwo">
            This is a good start! We highly recommend you to keep learning about
            your devices capabilities and their security characteristics. It is
            valuable to know what actions you can take to ensure that a device
            is secure on your end.
          </h4>
        </div>
      )}
      {score > 0.7 && (
        <div className="answerthree">
          <h4 className="answerthree">
            Good! It is valuable to know what actions you can take to ensure
            that a device is secure on your end.
          </h4>
        </div>
      )}
    </>
  );
}

export function FullSummary() {
  const navigate = useNavigate();
  return (
    <div className="quiz-button-container">
      <button
        className="button"
        onClick={() => navigate(`/${RouteNames.fullsummary}`)}
      >
        FULL SUMMARY
      </button>
    </div>
  );
}
