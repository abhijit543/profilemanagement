import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const FinalPreview = () => {
  let basicdata = useSelector((state) => state.MyBasic);
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-xl-6 mb-5">
          <div className="card border-0 shadow-lg">
            <div className="card-header bg-info text-white">Basic Details</div>
            <div className="card-body">
              <table className="table">
                <tbody>
                  <tr>
                    <td>Fullname</td>
                    <td>{basicdata.fullname}</td>
                  </tr>
                  <tr>
                    <td>Date of Birth</td>
                    <td>{basicdata.dob}</td>
                  </tr>
                  <tr>
                    <td>Gender</td>
                    <td>{basicdata.gender}</td>
                  </tr>
                  <tr>
                    <td>Married</td>
                    <td>{basicdata.married}</td>
                  </tr>
                  <tr>
                    <td>Profile</td>
                    <td>{basicdata.profilestatus}</td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <b>About</b>
                    </td>
                    <td>{basicdata.about}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="card-footer">
              <Link to="/basic" className="text-decoration-none">
                <i className="fa fa-edit"></i> Edit
              </Link>
            </div>
          </div>
        </div>
        <div className="col-xl-6 mb-5">
          <div className="card border-0 shadow-lg">
            <div className="card-header bg-info text-white">Contact Details</div>
            <div className="card-body">Contact will come</div>
            <div className="card-footer">
              <Link to="/contact" className="text-decoration-none">
                <i className="fa fa-edit"></i> Edit
              </Link>
            </div>
          </div>
        </div>
        <div className="col-xl-6 mb-5">
          <div className="card border-0 shadow-lg">
            <div className="card-header bg-info text-white">Education Details</div>
            <div className="card-body">Education will come</div>
            <div className="card-footer">
              <Link to="/education" className="text-decoration-none">
                <i className="fa fa-edit"></i> Edit
              </Link>
            </div>
          </div>
        </div>
        <div className="col-xl-6 mb-5">
          <div className="card border-0 shadow-lg">
            <div className="card-header bg-info text-white">Skill Details</div>
            <div className="card-body">Skill will come</div>
            <div className="card-footer">
              <Link to="/skill" className="text-decoration-none">
                <i className="fa fa-edit"></i> Edit
              </Link>
            </div>
          </div>
        </div>
        <div className="col-xl-6 mb-5">
          <div className="card border-0 shadow-lg">
            <div className="card-header bg-info text-white">Project Details</div>
            <div className="card-body">Project will come</div>
            <div className="card-footer">
              <Link to="/project" className="text-decoration-none">
                <i className="fa fa-edit"></i> Edit
              </Link>
            </div>
          </div>
        </div>
        <div className="col-xl-6 mb-5">
          <div className="card border-0 shadow-lg">
            <div className="card-header bg-info text-white">Experience Details</div>
            <div className="card-body">Experience will come</div>
            <div className="card-footer">
              <Link to="/experience" className="text-decoration-none">
                <i className="fa fa-edit"></i> Edit
              </Link>
            </div>
          </div>
        </div>
        <div className="col-xl-12 text-center">
          <button className="btn btn-danger">Submit My details</button>
        </div>
      </div>
    </div>
  );
};
export default FinalPreview;
