import { useState } from "react";
import LeftNav from "../navigation";
import { useDispatch, useSelector } from "react-redux";

function Basic() {
  let basicdata = useSelector((state) => state.MyBasic);
  let [name, setName] = useState(basicdata.fullname);
  let [dob, setDob] = useState(basicdata.dob);
  let [gender, setGender] = useState(basicdata.gender);
  let [married, setMarried] = useState(basicdata.married);
  let [profilestatus, setStatus] = useState(basicdata.profilestatus);
  let [about, setAbout] = useState(basicdata.about);
  let dispatch = useDispatch();
  const save = () => {
    let userinfo = {
      fullname: name,
      dob: dob,
      gender: gender,
      married: married,
      profilestatus: profilestatus,
      about: about,
    };
    let mydata = { type: "basic", info: userinfo };
    dispatch(mydata);
    alert("your basic details save successfully .....");
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
              <h4>Basic Information</h4>
            </div>

            <div className="card-body">
              <div className="row">
                <div className="col-xl-6 mb-3">
                  <label htmlFor="fullname" className="form-label">
                    Full Name
                  </label>
                  <input type="text" className="form-control" placeholder="Enter your full name" onChange={(obj) => setName(obj.target.value)} value={name} />
                </div>
                <div className="col-xl-6 mb-3">
                  <label htmlFor="dob" className="form-label">
                    Date of Birth
                  </label>
                  <input type="date" className="form-control" onChange={(obj) => setDob(obj.target.value)} value={dob} />
                </div>
              </div>

              <div className="row">
                <div className="col-xl-6 mb-3">
                  <label htmlFor="gender" className="form-label">
                    Gender
                  </label>
                  <select className="form-select" onChange={(obj) => setGender(obj.target.value)} value={gender}>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
                <div className="col-xl-6 mb-3">
                  <label htmlFor="married" className="form-label">
                    Married
                  </label>
                  <select className="form-select" onChange={(obj) => setMarried(obj.target.value)} value={married}>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
              </div>

              <div className="row">
                <div className="col-xl-6 mb-3">
                  <label htmlFor="status" className="form-label">
                    Profile Status
                  </label>
                  <select className="form-select" onChange={(obj) => setStatus(obj.target.value)} value={profilestatus}>
                    <option>choosse.......</option>
                    <option>Active</option>
                    <option>Inactive</option>
                  </select>
                </div>
                <div className="col-xl-6 mb-3">
                  <label htmlFor="about" className="form-label">
                    About Yourself
                  </label>
                  <textarea className="form-control" rows="3" maxLength="200" placeholder="Tell us about yourself" onChange={(obj) => setAbout(obj.target.value)} value={about}></textarea>
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

export default Basic;
