import { Route, BrowserRouter, Routes } from 'react-router-dom';

import Home from './home/index'
import Quiz from './quiz';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Routes>
          <Route path="/quiz">
            <Quiz />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Routes>
      </BrowserRouter >
    </div>
  );
}

export default App;
