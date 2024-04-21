import {combineReducers, createStore} from "redux";
import leveling from "../modules/level";

const rootReducer = combineReducers({
    leveling
});

const store = createStore(rootReducer);

export default store;