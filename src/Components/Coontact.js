import LeftNav from "../navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";

function Contact() {
  let contactdata = useSelector((state) => state.MyContact);
  let [mobile, setMobile] = useState(contactdata.mobile);
  let [email, setEmail] = useState(contactdata.email);
  let [locaddress, setlocaddress] = useState(contactdata.locaddress);
  let [peraddress, setperaddress] = useState(contactdata.permaddress);
  let [refaddress, setrefaddress] = useState(contactdata.refaddress);
  let [errors, setErrors] = useState({});
  const validate = () => {
    let storeError = {};

    const mobileRegex = /^[0-9]{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!mobile.trim()) {
      storeError.mobile = "Mobile number is required";
    } else if (!mobileRegex.test(mobile)) {
      storeError.mobile = "Mobile number must be 10 digits";
    }

    if (!email.trim()) {
      storeError.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      storeError.email = "Invalid email format";
    }

    if (!locaddress.trim() || locaddress.length < 10) {
      storeError.locaddress = "Local address must be at least 10 characters long";
    }

    if (!peraddress.trim() || peraddress.length < 10) {
      storeError.peraddress = "Permanent address must be at least 10 characters long";
    }

    if (!refaddress.trim() || refaddress.length < 10) {
      storeError.refaddress = "Reference address must be at least 10 characters long";
    }

    setErrors(storeError);
    return Object.keys(storeError).length === 0;
  };
  let dispatch = useDispatch();

  const save = () => {
    if (!validate()) {
      return;
    } else {
      let contactinfo = {
        mobile: mobile,
        email: email,
        locaddress: locaddress,
        permaddress: peraddress,
        refaddress: refaddress,
      };
      let mydata = { type: "contact", info: contactinfo };
      dispatch(mydata);

      swal("Save Success", "Your contact details have been saved successfully!", "success");
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
              <h4>Contact Details</h4>
            </div>

            <div className="card-body">
              <div className="row">
                <div className="col-xl-6 mb-3">
                  <label htmlFor="mobile" className="form-label">
                    Mobile Number
                  </label>
                  <input type="number" className="form-control" placeholder="Enter your Mobile Number" onChange={(e) => setMobile(e.target.value)} value={mobile} />
                  {errors.mobile && <div className="text-danger">{errors.mobile}</div>}
                </div>
                <div className="col-xl-6 mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input type="email" className="form-control" placeholder="Enter your Email" onChange={(e) => setEmail(e.target.value)} value={email} />
                  {errors.email && <div className="text-danger">{errors.email}</div>}
                </div>
              </div>

              <div className="row">
                <div className="col-xl-6 mb-3">
                  <label htmlFor="localAddress" className="form-label">
                    Local Address
                  </label>
                  <textarea className="form-control" rows="3" maxLength="200" placeholder="Provide Local Address" onChange={(e) => setlocaddress(e.target.value)} value={locaddress} />
                  {errors.locaddress && <div className="text-danger">{errors.locaddress}</div>}
                </div>
                <div className="col-xl-6 mb-3">
                  <label htmlFor="permanentAddress" className="form-label">
                    Permanent Address
                  </label>
                  <textarea className="form-control" rows="3" maxLength="200" placeholder="Provide Permanent Address" onChange={(e) => setperaddress(e.target.value)} value={peraddress} />
                  {errors.peraddress && <div className="text-danger">{errors.peraddress}</div>}
                </div>
              </div>

              <div className="row">
                <div className="col-xl-6 mb-3">
                  <label htmlFor="referenceAddress" className="form-label">
                    Reference Address
                  </label>
                  <textarea className="form-control" rows="3" maxLength="200" placeholder="Provide Reference Address" onChange={(e) => setrefaddress(e.target.value)} value={refaddress} />
                  {errors.refaddress && <div className="text-danger">{errors.refaddress}</div>}
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

export default Contact;
