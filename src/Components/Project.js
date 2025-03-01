import React from "react";
import LeftNav from "../navigation";

function MyProject() {
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
                  <input type="text" className="form-control" placeholder="Enter your Projects" />
                </div>
                <div className="col-xl-6 mb-3">
                  <label htmlFor="projectDetails" className="form-label">
                    Project Details
                  </label>
                  <textarea className="form-control" rows="3" maxLength="200" placeholder="Provide Project Details"></textarea>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-xl-6 mb-3">
                  <label htmlFor="technology" className="form-label">
                    Technology Used
                  </label>
                  <textarea className="form-control" rows="3" maxLength="200" placeholder="Provide tech used"></textarea>
                </div>
                <div className="col-xl-6 mb-3">
                  <label htmlFor="liveUrl" className="form-label">
                    Any Live URL
                  </label>
                  <input type="text" className="form-control" placeholder="Enter your live URL" />
                </div>
              </div>
            </div>
            <div className="card-footer d-flex justify-content-center align-items-center">
              <button type="submit" className="btn btn-danger">
                Save & Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProject;
