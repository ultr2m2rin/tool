import { useNavigate } from "react-router-dom";

import { RouteNames } from "../../App";
import { useGlobalState } from "../store/score-context";

export default function Summary() {
  const { state } = useGlobalState();

  return (
    <div>
      Cool! Your score is {state.score} out of {state.totalQuestions}
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
      {score <= 0.3 && <div>you're stupid</div>}
      {score > 0.3 && score <= 0.7 && <div>great score! :D</div>}
      {score > 0.7 && (
        <div>you're still stupid, but, at least you score above 70%!</div>
      )}
    </>
  );
}

export function SecondQuiz() {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(`/${RouteNames.sectwo}`)}>
      Next Section
    </button>
  );
}
