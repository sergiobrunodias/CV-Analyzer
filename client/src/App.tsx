import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import ResumeInfo from "./pages/ResumeInfo"
import ResumeUpload from "./pages/ResumeUpload"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ResumeUpload />} />
        <Route path="/info" element={<ResumeInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
