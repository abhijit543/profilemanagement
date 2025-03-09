import React, { useState } from "react";
import LeftNav from "../navigation";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
function Skill() {
  // Using Redux to get any existing skill data
  let skilldata = useSelector((state) => state.MySkill);

  // Local state to store the skill input
  let [skills, setSkills] = useState(skilldata.skills);
  let [skillserr, setSkillerr] = useState("");

  // Dispatch function to update Redux store
  let dispatch = useDispatch();

  // Save function that dispatches the action to Redux
  const save = () => {
    if (skills === "") {
      setSkillerr("please input some skill");
    } else {
      setSkillerr("");
      let skillInfo = {
        skills: skills,
      };

      // Dispatch action with type "skill" to update the store
      let actionData = { type: "skill", info: skillInfo };
      dispatch(actionData);

      swal("Save Success", "Your skill details have been saved successfully!", "success");
    }
  };

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
                  <textarea className="form-control" rows="3" maxLength="200" placeholder="Enter details about your skills" onChange={(e) => setSkills(e.target.value)} value={skills} />
                </div>
                {skillserr && <div className="text-danger">{skillserr}</div>}
              </div>
            </div>

            <div className="card-footer text-center bg-secondary d-flex justify-content-center align-items-center">
              <button type="button" className="btn btn-danger" onClick={save}>
                Save & Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
