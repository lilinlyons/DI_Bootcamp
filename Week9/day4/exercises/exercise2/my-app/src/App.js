import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostList from "./component/PostList";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<PostList />} />
            </Routes>
        </Router>
    );
}

export default App;