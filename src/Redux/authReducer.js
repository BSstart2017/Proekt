import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";


const SET_USER_DATA = 'it_Belarus/auth/SET_USER_DATA';

let initialState = {
    userID:null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA :{
           return {
               ...state,
               ...action.payload,
               isAuth: true
           }
        }
        default:
            return state;
    }
}

export const setUserAuthData = (userId, email, login, iaAuth) => ({type: SET_USER_DATA, payload:
        {userId,  email, login, iaAuth}})

export const getUserAuthData = () => (dispatch) => {
    return  authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
         let {id, login, email} = response.data.data;
         dispatch(setUserAuthData(id, login, email, true))
     }
        });
}

export const login = (email, password, rememberMe) =>  (dispatch) => {
   authAPI.login(email, password, rememberMe)
       .then(response =>{
           if (response.data.resultCode === 0){
           dispatch(getUserAuthData())
       }
       else {
           let message = response.data.messages.length > 0 ? response.data.message[0] : "Some error";
           dispatch(stopSubmit("login", {_error: message}))
       }
       });

}
export const logout = () => (dispatch) => {
   authAPI.logout().then(response => {
       if (response.data.resultCode === 0){
       dispatch(setUserAuthData(null, null, null, false))
   }
   });
}

export default authReducer;