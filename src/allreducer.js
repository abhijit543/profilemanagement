import { combineReducers } from "redux";
import MyBasic from "./basicreducer";
import MyContact from "./contactreducer";
import MyEducation from "./edureducer";
import MyExperience from "./expreducer";
import MySkill from "./skillreducer";
import MyProject from "./projectreducer";

const MainReducer = combineReducers({
  MyBasic,
  MyContact,
  MyEducation,
  MyExperience,
  MySkill,
  MyProject,
});
export default MainReducer;
