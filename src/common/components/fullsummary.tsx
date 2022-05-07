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
      <h3>This is your full summary</h3>
      <div>total score: {state.totaltotalScore}</div>
      <div>total questions: {state.totaltotalQuestions}</div>

      <h2>Section 1</h2>
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
