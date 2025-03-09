import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import swal from "sweetalert";
const FinalPreview = () => {
  let basicdata = useSelector((state) => state.MyBasic);

  let contactdata = useSelector((state) => state.MyContact);
  let educationdata = useSelector((state) => state.MyEducation);
  let skilldata = useSelector((state) => state.MySkill);
  let projectdata = useSelector((state) => state.MyProject);

  let experiencedata = useSelector((state) => state.MyExperience);
  // const save1 = () => {
  //   let mydata = {
  //     basic: basicdata,
  //     education: educationdata,
  //     contact: contactdata,
  //     skill: skilldata,
  //     project: projectdata,
  //     exp: experiencedata,
  //   };
  //   let url = "http://localhost:1234/userapi";
  //   let postdata = {
  //     headers: { "Content-Type": "application/json" },
  //     method: "POST",
  //     body: JSON.stringify(mydata), // Ensure `mydata` is defined
  //   };
  //   fetch(url, postdata)
  //     .then((response) => response.json())
  //     .then((info) => {
  //       swal("Details Submitted", "Your Details Submitted to server", "success");
  //       setTimeout(() => {
  //         window.location.reload();
  //       }, 3000);
  //     });
  // };
  const save = () => {
    let mydata = {
      basic: basicdata,
      education: educationdata,
      contact: contactdata,
      skill: skilldata,
      project: projectdata,
      exp: experiencedata,
    };
    let url = "https://cybotrix.com/liveapi/api/save";
    let postdata = {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({ details: mydata }), // Ensure `mydata` is defined
    };
    fetch(url, postdata)
      .then((response) => response.text())
      .then((info) => {
        swal("Details Submitted", "ypur profile submitted, we will contact you soon.........", "success");
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      });
  };
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
                    <th>PAssing Year</th>
                    <td>{educationdata.passingYear}</td>
                  </tr>
                  <tr>
                    <th>Grade</th>
                    <td>{educationdata.grade}</td>
                  </tr>
                  <tr>
                    <th>College</th>
                    <td>{educationdata.college}</td>
                  </tr>
                  <tr>
                    <th>City</th>
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
              <table className="table">
                <tbody>
                  <tr>
                    <th>Skill</th>
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
                    <th>projects</th>
                    <td>{projectdata.projects}</td>
                  </tr>
                  <tr>
                    <th>Project Details</th>
                    <td>{projectdata.projectDetails}</td>
                  </tr>
                  <tr>
                    <th>Technology</th>
                    <td>{projectdata.technology}</td>
                  </tr>
                  <tr>
                    <th>Live URL</th>
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
              <table className="table">
                <tbody>
                  <tr>
                    <th>totalExperience</th>
                    <td>{experiencedata.totalExperience}</td>
                  </tr>
                  <tr>
                    <th>Experience details</th>
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
          <button className="btn btn-danger" onClick={save}>
            Submit My details
          </button>
        </div>
      </div>
    </div>
  );
};
export default FinalPreview;
