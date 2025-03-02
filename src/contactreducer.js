const MyContact = (state, action) => {
  let data = {
    mobile: "",
    email: "",
    locaddress: "",
    permaddress: "",
    refaddress: "",
  };
  let contactData = Object.assign(data, state);
  if (action.type === "contact") {
    contactData = action.info;
  }
  return contactData;
};
export default MyContact;
