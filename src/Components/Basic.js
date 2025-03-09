import { useState } from "react";
import LeftNav from "../navigation";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";

function Basic() {
  let basicdata = useSelector((state) => state.MyBasic);
  let [name, setName] = useState(basicdata.fullname);
  let [dob, setDob] = useState(basicdata.dob);
  let [gender, setGender] = useState(basicdata.gender);
  let [married, setMarried] = useState(basicdata.married);
  let [profilestatus, setStatus] = useState(basicdata.profilestatus);
  let [errors, setErrors] = useState({});
  const validate = () => {
    let storeError = {};
    let today = new Date();
    let selectedDate = new Date(dob);

    if (!name.trim()) {
      storeError.name = "Full name is required";
    } else if (name.length < 3) {
      storeError.name = "Full name must be at least 3 characters long";
    }

    if (!dob) {
      storeError.dob = "Date of birth is required";
    } else if (selectedDate >= today) {
      storeError.dob = "Date of birth must be a past date";
    }

    if (!gender) {
      storeError.gender = "Please select your gender";
    }

    if (!married) {
      storeError.married = "Please select marital status";
    }

    if (!profilestatus || profilestatus === "choosse.......") {
      storeError.profilestatus = "Please select profile status";
    }

    if (!about.trim()) {
      storeError.about = "Please enter something about yourself";
    } else if (about.length < 10) {
      storeError.about = "About section must be at least 10 characters long";
    }

    setErrors(storeError);
    return Object.keys(storeError).length === 0;
  };
  let [about, setAbout] = useState(basicdata.about);
  let dispatch = useDispatch();
  const save = () => {
    if (!validate()) {
      return;
    } else {
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
      swal("Save Success", "your basic details save successfully .....", "success");
    }
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
                  {errors.name && <div className="text-danger">{errors.name}</div>}
                </div>
                <div className="col-xl-6 mb-3">
                  <label htmlFor="dob" className="form-label">
                    Date of Birth
                  </label>
                  <input type="date" className="form-control" onChange={(obj) => setDob(obj.target.value)} value={dob} />
                  {errors.dob && <div className="text-danger">{errors.dob}</div>}
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
                  {errors.gender && <div className="text-danger">{errors.gender}</div>}
                </div>
                <div className="col-xl-6 mb-3">
                  <label htmlFor="married" className="form-label">
                    Married
                  </label>
                  <select className="form-select" onChange={(obj) => setMarried(obj.target.value)} value={married}>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                  {errors.married && <div className="text-danger">{errors.married}</div>}
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
                  {errors.profilestatus && <div className="text-danger">{errors.profilestatus}</div>}
                </div>
                <div className="col-xl-6 mb-3">
                  <label htmlFor="about" className="form-label">
                    About Yourself
                  </label>
                  <textarea className="form-control" rows="3" maxLength="200" placeholder="Tell us about yourself" onChange={(obj) => setAbout(obj.target.value)} value={about}></textarea>
                  {errors.about && <div className="text-danger">{errors.about}</div>}
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
