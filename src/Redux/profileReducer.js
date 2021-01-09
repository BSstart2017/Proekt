import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const ADD_DATE_NEW_POST_TEXT = 'ADD_DATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    PostsData: [
        {id: 1, post: 'Че молчим на че не пишем а?', LikeCount: '9'},
        {id: 2, post: 'Привет Мир!', LikeCount: '12'},
        {id: 3, post: 'Ну здарова чувак!', LikeCount: '32'}
    ],
    newPostText: '',
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST :{
            let NewPost = {id: 4, post: state.newPostText, LikeCount: '0'};
           return {
               ...state,
               PostsData: [...state.PostsData, NewPost],
               newPostText: ''
           }
        }
        case ADD_DATE_NEW_POST_TEXT:{
            return {...state, newPostText: action.NewText}
        }
        case SET_USER_PROFILE:{
            return {...state, profile: action.profile}
        }
        case SET_STATUS:{
            return {...state, status: action.status}
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: ADD_DATE_NEW_POST_TEXT, NewText: text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})


export const getUserProfile = (userId) => (dispatch) => {
    profileAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data))
        });
}
export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
            dispatch(setStatus(response.data))
        });
}
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
        });
}


export default profileReducer;