import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";

let reducer = combineReducers({
    ProfilePage: profileReducer,
    DialogsPage: dialogsReducer,
    UsersPage: usersReducer
})

let store = createStore(reducer);

export default store;