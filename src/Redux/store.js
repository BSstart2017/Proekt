import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer} from "redux-form";

let reducer = combineReducers({
    ProfilePage: profileReducer,
    DialogsPage: dialogsReducer,
    UsersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
})

let store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default store;