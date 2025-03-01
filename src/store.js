import { legacy_createStore as createstore } from "redux";
import MainReducer from "./allreducer";
const Mystore = createstore(MainReducer);
export default Mystore;
