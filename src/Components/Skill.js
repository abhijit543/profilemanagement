import React from "react";
import LeftNav from "../navigation";

function MySkill() {
  return (
    <div className="container mt-5">
      <div className="row">
        {/* Left Navigation Section */}
        <div className="col-xl-3 mb-4">
          <LeftNav />
        </div>

        {/* Main Skill Details Section */}
        <div className="col-xl-9">
          <div className="card">
            <div className="card-header bg-info text-white text-center">
              <h4>Skill Details</h4>
            </div>

            <div className="card-body">
              <div className="row">
                <div className="col-xl-12 mb-3">
                  <label htmlFor="skillDetails" className="form-label">
                    Skills
                  </label>
                  <textarea className="form-control" rows="3" maxLength="200" placeholder="Enter details about your skills"></textarea>
                </div>
              </div>
            </div>

            <div className="card-footer text-center bg-secondary d-flex justify-content-center align-items-center">
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

export default MySkill;
