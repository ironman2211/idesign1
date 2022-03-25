import './App.css';
import Navbar from './component/navbar';
import ProjectPage from './component/LandingPage';
import Experience from './component/experience';
import ZoomConsult from './component/zoomConsult';
import ZoomConsultOne from './component/zoomConsultOne';
import ZoomConsultTwo from './component/zoomConsultTwo';
import Completed from './component/completed';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Router>
        <Routes>
          <Route exact path="/" element={<ProjectPage />} />
          <Route exact path="/exp" element={<Experience />} />
          <Route exact path="/zoom" element={<ZoomConsult />} />
          <Route exact path="/zoom/one" element={<ZoomConsultOne />} />
          <Route exact path="/zoom/two" element={<ZoomConsultTwo />} />
          <Route exact path="/complete" element={<Completed />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
