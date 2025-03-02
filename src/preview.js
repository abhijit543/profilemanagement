import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const FinalPreview = () => {
  let basicdata = useSelector((state) => state.MyBasic);

  let contactdata = useSelector((state) => state.MyContact);
  let educationdata = useSelector((state) => state.MyEducation);
  let skilldata = useSelector((state) => state.MySkill);
  let projectdata = useSelector((state) => state.MyProject);

  let experiencedata = useSelector((state) => state.MyExperience);
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
            <div className="card-body">
              <table className="table">
                <tbody>
                  <tr>
                    <td>Mobile</td>
                    <td>{contactdata.mobile}</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>{contactdata.email}</td>
                  </tr>
                  <tr>
                    <td>Local Address</td>
                    <td>{contactdata.locaddress}</td>
                  </tr>
                  <tr>
                    <td>Permanent Address</td>
                    <td>{contactdata.peraddress}</td>
                  </tr>
                  <tr>
                    <td>Reference Address</td>
                    <td>{contactdata.refaddress}</td>
                  </tr>
                </tbody>
              </table>
            </div>
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
            <div className="card-body">
              {" "}
              <table className="table">
                <tbody>
                  <tr>
                    <td>Higher Education</td>
                    <td>{educationdata.highestEducation}</td>
                  </tr>
                  <tr>
                    <td>PAssing Year</td>
                    <td>{contactdata.passingYear}</td>
                  </tr>
                  <tr>
                    <td>Grade</td>
                    <td>{contactdata.grade}</td>
                  </tr>
                  <tr>
                    <td>College</td>
                    <td>{contactdata.college}</td>
                  </tr>
                  <tr>
                    <td>City</td>
                    <td>{contactdata.city}</td>
                  </tr>
                </tbody>
              </table>
            </div>
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
            <div className="card-body">
              {" "}
              <table className="table">
                <tbody>
                  <tr>
                    <td>Skill</td>
                    <td>{skilldata.skills}</td>
                  </tr>
                </tbody>
              </table>
            </div>
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
            <div className="card-body">
              <table className="table">
                <tbody>
                  <tr>
                    <td>projects</td>
                    <td>{projectdata.projects}</td>
                  </tr>
                  <tr>
                    <td>Project Details</td>
                    <td>{projectdata.projectDetails}</td>
                  </tr>
                  <tr>
                    <td>Technology</td>
                    <td>{projectdata.technology}</td>
                  </tr>
                  <tr>
                    <td>Live URL</td>
                    <td>{projectdata.liveUrl}</td>
                  </tr>
                </tbody>
              </table>
            </div>
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
            <div className="card-body">
              {" "}
              <table className="table">
                <tbody>
                  <tr>
                    <td>totalExperience</td>
                    <td>{experiencedata.totalExperience}</td>
                  </tr>
                  <tr>
                    <td>Experience details</td>
                    <td>{experiencedata.aboutExperience}</td>
                  </tr>
                </tbody>
              </table>
            </div>
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
