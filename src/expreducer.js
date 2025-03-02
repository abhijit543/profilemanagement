const MyExperience = (state, action) => {
  let data = {
    totalExperience: "",
    aboutExperience: "",
  };

  let experienceData = Object.assign(data, state);

  if (action.type === "experience") {
    experienceData = action.info;
  }

  return experienceData;
};

export default MyExperience;
