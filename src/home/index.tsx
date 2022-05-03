import { useNavigate } from "react-router-dom";

import { RouteNames } from "../App";
import "../common/components/quiz.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <button
        className="button"
        onClick={() => navigate(`/${RouteNames.setup}`)}
      >
        INITIAL SETUP
      </button>
    </>
  );
}
