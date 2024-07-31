import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Example1 from "./component/Example1";
import Example2 from "./component/Example2";
import Example3 from "./component/Example3";


function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Example1 />} />
        </Routes>
          <Routes>
              <Route path="/" element={<Example2 />} />
          </Routes>
          <Routes>
              <Route path="/" element={<Example3 />} />
          </Routes>
      </Router>
  );
}

export default App;