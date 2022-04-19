import { Route, BrowserRouter, Routes } from "react-router-dom";
import Summary from "./common/components/summary";
import SummaryTwo from "./common/components/summarytwo";
import { questions } from "./common/setup-question-list";

import Home from "./home/index";
import Setup from "./setup";
import SecondQuiz from "./common/components/secondquiz";

export enum RouteNames {
  setup = "setup",
  summary = "summary",
  summarytwo = "summarytwo",
  nextsec = "secondquiz",
}

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={`/${RouteNames.setup}`} element={<Setup />} />
          <Route path={`/${RouteNames.summary}`} element={<Summary />} />
          <Route path={`/${RouteNames.summarytwo}`} element={<SummaryTwo />} />
          <Route
            path={`/${RouteNames.nextsec}`}
            element={<SecondQuiz questions={questions} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
