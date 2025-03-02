import { HashRouter, Routes, Route } from "react-router-dom";
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
    <HashRouter>
      <Routes>
        <Route exact path="/basic" element={<Basic />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/education" element={<Education />} />
        <Route exact path="/experience" element={<Experience />} />
        <Route exact path="/project" element={<Project />} />
        <Route exact path="/skill" element={<Skill />} />
        <Route exact path="/" element={<FinalPreview />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
