import LeftNav from "../navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Education() {
  let educationData = useSelector((state) => state.MyEducation);

  let [highestEducation, setHighestEducation] = useState(educationData.highestEducation);
  let [passingYear, setPassingYear] = useState(educationData.passingYear);
  let [grade, setGrade] = useState(educationData.grade);
  let [college, setCollege] = useState(educationData.college);
  let [city, setCity] = useState(educationData.city);

  let dispatch = useDispatch();

  const save = () => {
    let educationInfo = {
      highestEducation,
      passingYear,
      grade,
      college,
      city,
    };

    let myData = { type: "education", info: educationInfo };
    dispatch(myData);

    alert("Your education details have been saved successfully!");
  };

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
                  <label htmlFor="highestEducation" className="form-label">
                    Highest Education
                  </label>
                  <input type="text" className="form-control" placeholder="Enter your highest education" value={highestEducation} onChange={(e) => setHighestEducation(e.target.value)} />
                </div>
                <div className="col-xl-6 mb-3">
                  <label htmlFor="passingYear" className="form-label">
                    Passing Year
                  </label>
                  <input type="number" className="form-control" placeholder="Enter your passing year" value={passingYear} onChange={(e) => setPassingYear(e.target.value)} />
                </div>
              </div>

              <div className="row">
                <div className="col-xl-6 mb-3">
                  <label htmlFor="grade" className="form-label">
                    Grade
                  </label>
                  <input type="text" className="form-control" placeholder="Enter your grade" value={grade} onChange={(e) => setGrade(e.target.value)} />
                </div>
                <div className="col-xl-6 mb-3">
                  <label htmlFor="college" className="form-label">
                    College/University
                  </label>
                  <input type="text" className="form-control" placeholder="Enter college/university" value={college} onChange={(e) => setCollege(e.target.value)} />
                </div>
              </div>

              <div className="row">
                <div className="col-xl-6 mb-3">
                  <label htmlFor="city" className="form-label">
                    City
                  </label>
                  <input type="text" className="form-control" placeholder="Enter your city" value={city} onChange={(e) => setCity(e.target.value)} />
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

export default Education;
