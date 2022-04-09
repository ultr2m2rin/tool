import { Route, BrowserRouter, Routes } from 'react-router-dom';

import Home from './home/index'
import Setup from './setup';

export enum RouteNames {
  setup = 'setup'
}

function App() {
  return (
    <div>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={`/${RouteNames.setup}`} element={<Setup />} />
        </Routes>
      </BrowserRouter >
    </div>
  );
}

export default App;
