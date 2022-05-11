import { Route, HashRouter, Routes } from "react-router-dom";
import Summary from "./common/components/summary";
import SummaryTwo from "./common/components/summarytwo";
import SummaryThree from "./common/components/summarythree";
import { questions } from "./common/setup-question-list";
import { GlobalStateProvider } from "./common/store/score-context";

import Home from "./home/index";
import Setup from "./setup";
import SecondQuiz from "./common/components/secondquiz";
import ThirdQuiz from "./common/components/thirdquiz";

import "./app.css";
import FullSummary from "./common/components/fullsummary";

export enum RouteNames {
  setup = "setup",
  summary = "summary",
  summarytwo = "summarytwo",
  summarythree = "summarythree",
  sectwo = "secondquiz",
  secthree = "thirdquiz",
  fullsummary = "fullsummary",
}

function App() {
  return (
    <div id="app-div">
      <HashRouter>
        <GlobalStateProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path={`/${RouteNames.setup}`} element={<Setup />} />
            <Route path={`/${RouteNames.summary}`} element={<Summary />} />
            <Route
              path={`/${RouteNames.summarytwo}`}
              element={<SummaryTwo />}
            />
            <Route
              path={`/${RouteNames.summarythree}`}
              element={<SummaryThree />}
            />
            <Route
              path={`/${RouteNames.sectwo}`}
              element={<SecondQuiz questions={questions} />}
            />
            <Route
              path={`/${RouteNames.secthree}`}
              element={<ThirdQuiz questions={questions} />}
            />
            <Route
              path={`/${RouteNames.fullsummary}`}
              element={<FullSummary />}
            />
          </Routes>
        </GlobalStateProvider>
      </HashRouter>
    </div>
  );
}

export default App;
