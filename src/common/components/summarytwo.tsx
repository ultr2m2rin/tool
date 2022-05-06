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
            can prevent smart devices from exploitation by unauthorized entities
            (e.g., hackers) (in a case when you receive a notification and act
            on it). Therefore, it is important to have them on, especially the
            ones related to security performance. It is also necessary to know
            what kind of data smart devices collect, store, use, etc. This
            knowledge may prevent you from unwanted data sharing. We highly
            recommend learning this information and being aware of smart
            device’s permissions to operate with personal data.
          </h4>
        </div>
      )}
      {score > 0.3 && score <= 0.7 && (
        <div className="answertwo">
          <h4 className="answertwo">
            This is a good start! Sometimes, notifications can be annoying but
            when they provide you with important security information and you
            act on it on time, it can help you keep their device secure. Knowing
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
            prevent you from unwanted data sharing.
          </h4>
        </div>
      )}
    </>
  );
}

export function ThirdQuiz() {
  const navigate = useNavigate();
  const { setState } = useGlobalState();

  const nextSection = () => {
    navigate(`/${RouteNames.secthree}`);
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
