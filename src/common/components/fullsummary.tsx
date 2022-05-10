import { useEffect } from "react";
import { useGlobalState } from "../store/score-context";

import "./fullSummary.css";

export default function FullSummary() {
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
    <div className="full-summary">
      <h3 className="top">This is your full summary</h3>
      <div className="score">Total Score: {state.totaltotalScore}</div>
      <div className="question">
        Total Questions: {state.totaltotalQuestions}
      </div>

      <h2 className="section">Section 1</h2>
      {state.questionReccommendations?.map((qr, index) => {
        const { question, reccommendation } = qr;

        return (
          <div key={index}>
            <h2>{question} </h2>
            <div>{reccommendation}</div>
          </div>
        );
      })}
    </div>
  );
}
