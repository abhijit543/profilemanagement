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
                    <th>Fullname</th>
                    <td>{basicdata.fullname}</td>
                  </tr>
                  <tr>
                    <th>Date of Birth</th>
                    <td>{basicdata.dob}</td>
                  </tr>
                  <tr>
                    <th>Gender</th>
                    <td>{basicdata.gender}</td>
                  </tr>
                  <tr>
                    <th>Married</th>
                    <td>{basicdata.married}</td>
                  </tr>
                  <tr>
                    <th>Profile</th>
                    <td>{basicdata.profilestatus}</td>
                  </tr>
                  <tr>
                    <th colSpan={2}>
                      <b>About</b>
                    </th>
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
                    <th>Mobile</th>
                    <td>{contactdata.mobile}</td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td>{contactdata.email}</td>
                  </tr>
                  <tr>
                    <th>Local Address</th>
                    <td>{contactdata.locaddress}</td>
                  </tr>
                  <tr>
                    <th>Permanent Address</th>
                    <td>{contactdata.permaddress}</td>
                  </tr>
                  <tr>
                    <th>Reference Address</th>
                    <th>{contactdata.refaddress}</th>
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
              <table className="table">
                <tbody>
                  <tr>
                    <th>Higher Education</th>
                    <td>{educationdata.highestEducation}</td>
                  </tr>
                  <tr>
                    <td>PAssing Year</td>
                    <td>{educationdata.passingYear}</td>
                  </tr>
                  <tr>
                    <td>Grade</td>
                    <td>{educationdata.grade}</td>
                  </tr>
                  <tr>
                    <td>College</td>
                    <td>{educationdata.college}</td>
                  </tr>
                  <tr>
                    <td>City</td>
                    <td>{educationdata.city}</td>
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
