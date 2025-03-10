import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import swal from "sweetalert";
import { useState } from "react";
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
  let [errors, setErrors] = useState({});
  const validate = () => {
    let finalValidate = {};
    //Basic data validation
    if (basicdata.fullname.trim() === "") {
      finalValidate.fullname = "Full Name is required";
    }
    if (basicdata.dob.trim() === "") {
      finalValidate.dob = "Date of Birth is required";
    }
    if (basicdata.gender.trim() === "") {
      finalValidate.gender = "Gender is required";
    }
    if (basicdata.married.trim() === "") {
      finalValidate.married = "Martial status is required";
    }
    if (basicdata.profilestatus.trim() === "") {
      finalValidate.profilestatus = " Status is required";
    }

    if (basicdata.about.trim() === "") {
      finalValidate.about = "Tell us something about yourself";
    }
    // Contact Data Validation
    if (!contactdata.mobile?.trim()) finalValidate.mobile = "Mobile number is required";
    if (!contactdata.email?.trim()) finalValidate.email = "Email is required";
    if (!contactdata.permaddress?.trim()) finalValidate.permaddress = "Permanent address is required";
    if (!contactdata.locaddress?.trim()) finalValidate.contactdata = "Local Address is required";
    if (!contactdata.refaddress?.trim()) finalValidate.refaddress = "Reference address is required";

    // Education Data Validation
    if (!educationdata.highestEducation?.trim()) finalValidate.highestEducation = "Highest education is required";
    if (!educationdata.passingYear?.trim()) finalValidate.passingYear = "Passing year is required";
    if (!educationdata.grade?.trim()) finalValidate.grade = "Grade is required";
    if (!educationdata.college?.trim()) finalValidate.college = "College Name is required";
    if (!educationdata.city?.trim()) finalValidate.city = "city name is required";
    // Skill Data Validation
    if (!skilldata.skills?.trim()) finalValidate.skills = "At least one skill is required";
    //Project Data Validation
    if (!projectdata.projects?.trim()) finalValidate.projects = "Project Name is required";
    if (!projectdata.projectDetails?.trim()) finalValidate.projectDetails = "Project Details is required";
    if (!projectdata.technology?.trim()) finalValidate.technology = "Please Mention any technology used";
    if (!projectdata.liveUrl?.trim()) finalValidate.liveUrl = "Please mention your Hoisted URL";

    //Experience Validation
    if (!experiencedata.totalExperience?.trim()) finalValidate.totalExperience = "Total experience is required";
    if (!experiencedata.aboutExperience?.trim()) finalValidate.aboutExperience = "Tell Something about experience";

    setErrors(finalValidate);
    if (Object.keys(finalValidate).length > 0) {
      swal("Validation Error", "Please Fill all the required Fields!", "errors.png");
      return false;
    } else {
      return true;
    }
  };
  const save = async () => {
    if (!validate()) return;

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
      body: JSON.stringify({ details: mydata }),
    };

    try {
      const response = await fetch(url, postdata);
      if (!response.ok) throw new Error("Network response was not ok");

      await response.text(); // No need to store it in a variable

      swal("Details Submitted", "Your profile has been submitted successfully!", "success");

      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } catch (error) {
      swal("Error", "Something went wrong while submitting!", "error");
    }
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
                    <td>{basicdata.fullname || <span className="text-danger">{errors.fullname}</span>}</td>
                  </tr>
                  <tr>
                    <th>Date of Birth</th>
                    <td>{basicdata.dob || <span className="text-danger">{errors.dob}</span>}</td>
                  </tr>
                  <tr>
                    <th>Gender</th>
                    <td>{basicdata.gender || <span className="text-danger">{errors.gender}</span>} </td>
                  </tr>
                  <tr>
                    <th>Married</th>
                    <td>{basicdata.married || <span className="text-danger">{errors.married}</span>}</td>
                  </tr>
                  <tr>
                    <th>Profile</th>
                    <td>{basicdata.profilestatus || <span className="text-danger">{errors.profilestatus}</span>}</td>
                  </tr>
                  <tr>
                    <th colSpan={2}>
                      <b>About</b>
                    </th>
                    <td>{basicdata.about || <span className="text-danger">{errors.about}</span>}</td>
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
                    <td>{contactdata.mobile || <span className="text-danger">{errors.mobile}</span>} </td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td>{contactdata.email || <span className="text-danger">{errors.email}</span>}</td>
                  </tr>
                  <tr>
                    <th>Local Address</th>
                    <td>{contactdata.locaddress || <span className="text-danger">{errors.locaddress}</span>}</td>
                  </tr>
                  <tr>
                    <th>Permanent Address</th>
                    <td>{contactdata.permaddress || <span className="text-danger">{errors.permaddress}</span>}</td>
                  </tr>
                  <tr>
                    <th>Reference Address</th>
                    <td>{contactdata.refaddress || <span className="text-danger">{errors.refaddress}</span>}</td>
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
                    <td>{educationdata.highestEducation || <span className="text-danger">{errors.highestEducation}</span>}</td>
                  </tr>
                  <tr>
                    <th>PAssing Year</th>
                    <td>{educationdata.passingYear || <span className="text-danger">{errors.passingYear}</span>}</td>
                  </tr>
                  <tr>
                    <th>Grade</th>
                    <td>{educationdata.grade || <span className="text-danger">{errors.grade}</span>}</td>
                  </tr>
                  <tr>
                    <th>College</th>
                    <td>{educationdata.college || <span className="text-danger">{errors.college}</span>}</td>
                  </tr>
                  <tr>
                    <th>City</th>
                    <td>{educationdata.city || <span className="text-danger">{errors.city}</span>}</td>
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
                    <td>{skilldata.skills || <span className="text-danger">{errors.skills}</span>}</td>
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
                    <td>{projectdata.projects || <span className="text-danger">{errors.projects}</span>}</td>
                  </tr>
                  <tr>
                    <th>Project Details</th>
                    <td>{projectdata.projectDetails || <span className="text-danger">{errors.projectDetails}</span>}</td>
                  </tr>
                  <tr>
                    <th>Technology</th>
                    <td>{projectdata.technology || <span className="text-danger">{errors.technology}</span>}</td>
                  </tr>
                  <tr>
                    <th>Live URL</th>
                    <td>{projectdata.liveUrl || <span className="text-danger">{errors.liveUrl}</span>}</td>
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
                    <td>{experiencedata.totalExperience || <span className="text-danger">{errors.totalExperience}</span>}</td>
                  </tr>
                  <tr>
                    <th>Experience details</th>
                    <td>{experiencedata.aboutExperience || <span className="text-danger">{errors.aboutExperience}</span>}</td>
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
