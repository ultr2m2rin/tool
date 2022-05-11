import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { RouteNames } from "../../App";
import { useGlobalState } from "../store/score-context";

export default function Summary() {
  const { state } = useGlobalState();

  // preventing refresh
  useEffect(() => {
    window.addEventListener("beforeunload", alertUser);
    return () => {
      window.removeEventListener("beforeunload", alertUser);
    };
  }, []);
  const alertUser = (e: any) => {
    e.preventDefault();
    e.returnValue = "";
  };

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
            information about your devices’ capabilities and learn about their
            security characteristics. It is valuable to know what actions you
            can take to ensure that a device is secure on your end.
          </h4>
        </div>
      )}
      {score > 0.3 && score <= 0.7 && (
        <div className="answertwo">
          <h4 className="answertwo">
            This is a good start! We highly recommend you keep learning about
            your devices’ capabilities and their security characteristics. It is
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
  const { state, setState } = useGlobalState();

  const nextSection = () => {
    navigate(`/${RouteNames.fullsummary}`);

    const qr = state.questionReccommendations;
    const questions = state.totalQuestions;
    const totalQuestions = state.totaltotalQuestions;
    const score = state.score;
    const totalScore = state.totaltotalScore;

    if (qr === undefined) return;
    if (questions === undefined) return;
    if (totalQuestions === undefined) return;
    if (totalScore === undefined) return;

    setState((prevState) => ({
      ...prevState,
      score: 0,
      totalQuestions: 0,
      totaltotalQuestions: totalQuestions + questions,
      totaltotalScore: score + totalScore,
    }));
  };

  return (
    <div className="quiz-button-container">
      <button className="button" onClick={() => nextSection()}>
        FULL SUMMARY
      </button>
    </div>
  );
}
