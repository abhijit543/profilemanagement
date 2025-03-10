import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import FinalPreview from "./preview";
import "bootstrap/dist/css/bootstrap.css";
import Basic from "./Components/Basic";
import Contact from "./Components/Coontact";
import Experience from "./Components/Experience";
import Skill from "./Components/Skill";
import Project from "./Components/Project";
import Education from "./Components/Education";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
        <div className="container">
          <Link className="navbar-brand">
            <i className="fa fa-users fa-lg"></i>Profile Management
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item me-3">
                <Link className="nav-link active" to="/">
                  <i className="fa fa-home"></i>
                  My Home
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link active" to="/basic">
                  <i className="fa fa-home"></i>
                  Basic
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link active" to="/contact">
                  <i className="fa fa-headset"></i>
                  Contact
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link active" to="/education">
                  <i className="fa fa-book"></i>
                  Education
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link active" to="/skill">
                  <i className="fa fa-desktop"></i>
                  Skills
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link active" to="/project">
                  <i className="fa fa-suitcase"></i>
                  Project
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link active" to="/experience">
                  <i className="fa fa-file"></i>
                  Experience
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route exact path="/basic" element={<Basic />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/education" element={<Education />} />
        <Route exact path="/experience" element={<Experience />} />
        <Route exact path="/project" element={<Project />} />
        <Route exact path="/skill" element={<Skill />} />
        <Route exact path="/" element={<FinalPreview />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
