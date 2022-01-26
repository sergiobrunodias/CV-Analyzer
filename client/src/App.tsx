import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import ResumeInfo from "./pages/ResumeInfo"
import ResumeUpload from "./pages/ResumeUpload"
import 'bootstrap/dist/css/bootstrap.min.css';

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
