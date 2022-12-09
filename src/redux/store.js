//상태가 저장되어 있는 공간
import { createStore } from "redux";
import reducer from "./reducer/reducer";

let store = createStore(reducer);

export default store;
