import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

let initialState = {
    PostsData: [
        {id: 1, message: 'Че молчим на че не пишем а?', LikesCount: '9'},
        {id: 2, message: 'Привет Мир!', LikesCount: '12'},
        {id: 3, message: 'Ну здарова чувак!', LikesCount: '32'}
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST :{
            let NewPostText = {
                id: 4,
                message: action.NewPostText,
                LikesCount: '0'
            };
           return {
               ...state,
               PostsData: [...state.PostsData, NewPostText],
               NewPostText: ''
           }
        }
        case SET_USER_PROFILE:{
            return {...state, profile: action.profile}
        }
        case SET_STATUS:{
            return {...state, status: action.status}
        }
        case DELETE_POST:{
            return {...state, PostsData: state.PostsData.filter(p => p.id != action.postId)}
        }
        default:
            return state;
    }
}

export const addPost = (NewPostText) => ({type: ADD_POST, NewPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const deletePost = (postId) => ({type: DELETE_POST, postId})


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