import { useNavigate } from "react-router-dom";

import { RouteNames } from "../../App";

export default function Summary() {
  return (
    <div>
      Cool!<br></br>
      <ThirdQuiz />
    </div>
  );
}

export function ThirdQuiz() {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(`/${RouteNames.secthree}`)}>
      Next Section
    </button>
  );
}
