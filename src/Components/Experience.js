import React from "react";
import LeftNav from "../navigation";

function MyExperience() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-xl-3 mb-4">
          <LeftNav />
        </div>

        {/* Main Experience Form Section */}
        <div className="col-xl-9">
          <div className="card">
            <div className="card-header bg-info text-white text-center">
              <h4>Experience Details</h4>
            </div>

            <div className="card-body">
              <div className="row">
                <div className="col-xl-6 mb-3">
                  <label htmlFor="totalExperience" className="form-label">
                    Total Experience (Years)
                  </label>
                  <input type="number" className="form-control" placeholder="Enter total experience" />
                </div>
                <div className="col-xl-6 mb-3">
                  <label htmlFor="aboutExperience" className="form-label">
                    Experience Details
                  </label>
                  <textarea className="form-control" rows="3" maxLength="200" placeholder="Details about your experience"></textarea>
                </div>
              </div>
            </div>

            <div className="card-footer bg-secondary text-center d-flex justify-content-center align-items-center">
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

export default MyExperience;
