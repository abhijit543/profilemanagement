import React from "react";
import LeftNav from "../navigation";

function MyEducation() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-xl-3 mb-4">
          <LeftNav />
        </div>

        <div className="col-xl-9">
          <div className="card">
            <div className="card-header bg-info text-white text-center">
              <h4>Education Details</h4>
            </div>

            <div className="card-body">
              <div className="row">
                <div className="col-xl-6 mb-3">
                  <label htmlFor="education" className="form-label">
                    Highest Education
                  </label>
                  <input type="text" className="form-control" placeholder="Enter your highest education" />
                </div>
                <div className="col-xl-6 mb-3">
                  <label htmlFor="passingYear" className="form-label">
                    Passing Year
                  </label>
                  <input type="number" className="form-control" placeholder="Enter your passing year" />
                </div>
              </div>

              <div className="row">
                <div className="col-xl-6 mb-3">
                  <label htmlFor="grade" className="form-label">
                    Grade
                  </label>
                  <input type="number" className="form-control" placeholder="Enter your grade" />
                </div>
                <div className="col-xl-6 mb-3">
                  <label htmlFor="college" className="form-label">
                    College/University
                  </label>
                  <input type="text" className="form-control" placeholder="Enter college/university" />
                </div>
              </div>

              <div className="row">
                <div className="col-xl-6 mb-3">
                  <label htmlFor="city" className="form-label">
                    City
                  </label>
                  <input type="text" className="form-control" placeholder="Enter your city" />
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

export default MyEducation;
