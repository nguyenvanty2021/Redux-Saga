import { combineReducers } from "redux";
import task from "./Task/index"
import loading from "./Loading/index"
const rootReducer = combineReducers({task,loading});
export default rootReducer;