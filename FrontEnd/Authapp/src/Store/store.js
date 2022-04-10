import { createStore } from "redux";
import rootReducer from "../Reducers";

const configStore = createStore(rootReducer);

export default configStore;
