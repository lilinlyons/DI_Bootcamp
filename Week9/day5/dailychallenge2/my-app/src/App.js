import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QuoteFetcher from "./component/QuoteFetcher";



function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<QuoteFetcher />} />
        </Routes>
      </Router>
  );
}

export default App;