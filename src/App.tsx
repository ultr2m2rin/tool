import { Route, BrowserRouter, Routes } from 'react-router-dom';

import Home from './home/index'
import Quiz from './quiz';

function App() {
  return (
    <div>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </BrowserRouter >
    </div>
  );
}

export default App;
