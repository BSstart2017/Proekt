const FALLOW = 'FALLOW';
const UNFALLOW = 'UNFALLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: []
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FALLOW:
            return { ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId){
                        return {...u, fallowed: true}
                    }
                    return u;
                })
        }
        case UNFALLOW:
            return { ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, fallowed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:{
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state;
    }
}

export const fallowAC = (userId) => ({type: FALLOW, userId})
export const unfallowAC = (userId) => ({type: UNFALLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})

export default usersReducer;