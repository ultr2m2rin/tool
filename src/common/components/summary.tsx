import { useNavigate } from "react-router-dom";

import { RouteNames } from "../../App";

export default function Summary() {
  return (
    <div>
      Cool!<br></br>
      <SecondQuiz />
    </div>
  );
}

export function SecondQuiz() {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(`/${RouteNames.nextsec}`)}>
      Next Section
    </button>
  );
}
