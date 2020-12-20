import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let reducer = combineReducers({
    ProfilePage: profileReducer,
    DialogsPage: dialogsReducer
})

let store = createStore(reducer);

export default store;