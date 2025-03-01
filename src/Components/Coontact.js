import LeftNav from "../navigation";

function Mycontact() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-xl-3 mb-4">
          <LeftNav />
        </div>

        {/* Main Contact Form Section */}
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
                  <input type="number" className="form-control" placeholder="Enter your Mobile Number" />
                </div>
                <div className="col-xl-6 mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input type="text" className="form-control" placeholder="Enter your Email" />
                </div>
              </div>

              <div className="row">
                <div className="col-xl-6 mb-3">
                  <label htmlFor="localAddress" className="form-label">
                    Local Address
                  </label>
                  <textarea className="form-control" rows="3" maxLength="200" placeholder="Provide Local Address"></textarea>
                </div>
                <div className="col-xl-6 mb-3">
                  <label htmlFor="permanentAddress" className="form-label">
                    Permanent Address
                  </label>
                  <textarea className="form-control" rows="3" maxLength="200" placeholder="Provide Permanent Address"></textarea>
                </div>
              </div>

              <div className="row">
                <div className="col-xl-6 mb-3">
                  <label htmlFor="referenceAddress" className="form-label">
                    Any Reference Address and Contact
                  </label>
                  <textarea className="form-control" rows="3" maxLength="200" placeholder="Provide Reference Address"></textarea>
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

export default Mycontact;
