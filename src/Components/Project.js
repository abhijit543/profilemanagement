import React, { useState } from "react";
import LeftNav from "../navigation";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
function Project() {
  // Retrieve existing project data from Redux state
  let projectData = useSelector((state) => state.MyProject);

  // Initialize state for each project field with Redux data
  let [projects, setProjects] = useState(projectData.projects);
  let [projectDetails, setProjectDetails] = useState(projectData.projectDetails);
  let [technology, setTechnology] = useState(projectData.technology);
  let [liveUrl, setLiveUrl] = useState(projectData.liveUrl);

  let dispatch = useDispatch();

  // Save the project data to Redux store
  const save = () => {
    let projectInfo = {
      projects,
      projectDetails,
      technology,
      liveUrl,
    };

    // Dispatch the action to save project info to Redux
    dispatch({ type: "project", info: projectInfo });
    swal("Save Success", "Your Project details have been saved successfully!", "success");
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Left Navigation Section */}
        <div className="col-xl-3 mb-4">
          <LeftNav />
        </div>

        {/* Main Project Details Section */}
        <div className="col-xl-9">
          <div className="card">
            <h4 className="card-header bg-info text-white text-center">Project Details</h4>
            <div className="card-body">
              <div className="row">
                <div className="col-xl-6 mb-3">
                  <label htmlFor="project" className="form-label">
                    Projects
                  </label>
                  <input type="text" className="form-control" placeholder="Enter your Projects" value={projects} onChange={(e) => setProjects(e.target.value)} />
                </div>
                <div className="col-xl-6 mb-3">
                  <label htmlFor="projectDetails" className="form-label">
                    Project Details
                  </label>
                  <textarea className="form-control" rows="3" maxLength="200" placeholder="Provide Project Details" value={projectDetails} onChange={(e) => setProjectDetails(e.target.value)} />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-xl-6 mb-3">
                  <label htmlFor="technology" className="form-label">
                    Technology Used
                  </label>
                  <textarea className="form-control" rows="3" maxLength="200" placeholder="Provide tech used" value={technology} onChange={(e) => setTechnology(e.target.value)} />
                </div>
                <div className="col-xl-6 mb-3">
                  <label htmlFor="liveUrl" className="form-label">
                    Any Live URL
                  </label>
                  <input type="text" className="form-control" placeholder="Enter your live URL" value={liveUrl} onChange={(e) => setLiveUrl(e.target.value)} />
                </div>
              </div>
            </div>
            <div className="card-footer d-flex justify-content-center align-items-center">
              <button type="submit" className="btn btn-danger" onClick={save}>
                Save & Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
