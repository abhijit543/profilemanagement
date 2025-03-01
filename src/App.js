import { HashRouter, Routes, Route, Link } from "react-router-dom";
import FinalPreview from "./preview";
import "bootstrap/dist/css/bootstrap.css";
import Basic from "./Components/Basic";
import MyContact from "./Components/Coontact";
import MyEducation from "./Components/Education";
import MyExperience from "./Components/Experience";
import MySkill from "./Components/Skill";
import MyProject from "./Components/Project";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/basic" element={<Basic />} />
        <Route exact path="/contact" element={<MyContact />} />
        <Route exact path="/education" element={<MyEducation />} />
        <Route exact path="/experience" element={<MyExperience />} />
        <Route exact path="/project" element={<MyProject />} />
        <Route exact path="/skill" element={<MySkill />} />
        <Route exact path="/" element={<FinalPreview />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
