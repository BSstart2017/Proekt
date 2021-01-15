import {getUserAuthData} from "./authReducer";


const INITIALIZED_SUCCES = 'INITIALIZED_SUCCES';

let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case INITIALIZED_SUCCES :{
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state;
    }
}

export const  initializedSuccess = () => ({type: INITIALIZED_SUCCES})

export const initializedApp = () => (dispatch) => {
    let promise = dispatch(getUserAuthData());
    Promise.all([promise])
        .then(() => {
        dispatch(initializedSuccess());
        });
}



export default appReducer;