import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { RouteNames } from "../../App";
import { useGlobalState } from "../store/score-context";
import "./summary.css";

export default function Summary() {
  const { state, setState } = useGlobalState();

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
      <ThirdQuiz />
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
            There is always a room to grow. In some situations, notifications
            can prevent smart devices from being exploited by unauthorized
            entities (e.g., hackers) in a case when you receive a notification
            and act on it. Therefore, it is important to have them on,
            especially the ones related to security performance. It is also
            necessary to know what kind of data smart devices collect, store,
            use, etc. This knowledge may prevent unwanted data sharing. We
            highly recommend learning this information and being aware of smart
            device’s permissions to operate with personal data.
          </h4>
        </div>
      )}
      {score > 0.3 && score <= 0.7 && (
        <div className="answertwo">
          <h4 className="answertwo">
            This is a good start! Sometimes, notifications can be annoying but
            when they provide you with important security information and you
            act on it on time, it can help keep your devices secure. Knowing
            what kind of data devices collect, store, use, etc., is also
            beneficial since the knowledge may prevent you from unwanted data
            sharing.{" "}
          </h4>
        </div>
      )}
      {score > 0.7 && (
        <div className="answerthree">
          <h4 className="answerthree">
            Good! Remember it is beneficial to know what kind of data every
            smart device collects, stores, uses, etc., since this knowledge may
            prevent unwanted data sharing.
          </h4>
        </div>
      )}
    </>
  );
}

export function ThirdQuiz() {
  const navigate = useNavigate();
  const { state, setState } = useGlobalState();

  const nextSection = () => {
    navigate(`/${RouteNames.secthree}`);

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
      questionReccommendations: [
        ...qr,
        {
          question: <div>Section 3</div>,
          reccommendation: null,
        },
      ],
    }));
  };

  return (
    <div className="quiz-button-container">
      <button className="button" onClick={() => nextSection()}>
        NEXT SECTION
      </button>
    </div>
  );
}
