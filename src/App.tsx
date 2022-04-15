import { Route, BrowserRouter, Routes } from "react-router-dom";
import Summary from "./common/components/summary";

import Home from "./home/index";
import Setup from "./setup";

export enum RouteNames {
  setup = "setup",
  summary = "summary",
}

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={`/${RouteNames.setup}`} element={<Setup />} />
          <Route path={`/${RouteNames.summary}`} element={<Summary />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
