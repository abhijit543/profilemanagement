import React, { useState } from "react";
import LeftNav from "../navigation";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
function Experience() {
  // Retrieving experience data from Redux store
  let experienceData = useSelector((state) => state.MyExperience);

  // Setting up state for form inputs
  let [totalExperience, setTotalExperience] = useState(experienceData.totalExperience);
  let [aboutExperience, setAboutExperience] = useState(experienceData.aboutExperience);

  let dispatch = useDispatch();

  // Save experience data to Redux store
  const save = () => {
    let experienceInfo = {
      totalExperience,
      aboutExperience,
    };

    let myData = { type: "experience", info: experienceInfo };
    dispatch(myData);

    swal("Save Success", "Your experience details have been saved successfully!", "success");
  };

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
                  <input type="number" className="form-control" placeholder="Enter total experience" value={totalExperience} onChange={(e) => setTotalExperience(e.target.value)} />
                </div>
                <div className="col-xl-6 mb-3">
                  <label htmlFor="aboutExperience" className="form-label">
                    Experience Details
                  </label>
                  <textarea
                    className="form-control"
                    rows="3"
                    maxLength="200"
                    placeholder="Details about your experience"
                    value={aboutExperience}
                    onChange={(e) => setAboutExperience(e.target.value)}
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="card-footer bg-secondary text-white d-flex justify-content-center align-items-center">
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

export default Experience;
