const MyProject = (state, action) => {
  let data = {
    projects: "",
    projectDetails: "",
    technology: "",
    liveUrl: "",
  };

  let projectData = Object.assign(data, state);

  if (action.type === "project") {
    projectData = action.info;
  }

  return projectData;
};

export default MyProject;
