const MyEducation = (state, action) => {
  let data = {
    highestEducation: "",
    passingYear: "",
    grade: "",
    college: "",
    city: "",
  };

  let educationData = Object.assign(data, state);

  if (action.type === "education") {
    educationData = action.info;
  }

  return educationData;
};

export default MyEducation;
