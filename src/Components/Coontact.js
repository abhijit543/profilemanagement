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

  let dispatch = useDispatch();

  const save = () => {
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
                </div>
                <div className="col-xl-6 mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input type="email" className="form-control" placeholder="Enter your Email" onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>
              </div>

              <div className="row">
                <div className="col-xl-6 mb-3">
                  <label htmlFor="localAddress" className="form-label">
                    Local Address
                  </label>
                  <textarea className="form-control" rows="3" maxLength="200" placeholder="Provide Local Address" onChange={(e) => setlocaddress(e.target.value)} value={locaddress} />
                </div>
                <div className="col-xl-6 mb-3">
                  <label htmlFor="permanentAddress" className="form-label">
                    Permanent Address
                  </label>
                  <textarea className="form-control" rows="3" maxLength="200" placeholder="Provide Permanent Address" onChange={(e) => setperaddress(e.target.value)} value={peraddress} />
                </div>
              </div>

              <div className="row">
                <div className="col-xl-6 mb-3">
                  <label htmlFor="referenceAddress" className="form-label">
                    Reference Address
                  </label>
                  <textarea className="form-control" rows="3" maxLength="200" placeholder="Provide Reference Address" onChange={(e) => setrefaddress(e.target.value)} value={refaddress} />
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
