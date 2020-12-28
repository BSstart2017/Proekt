const FALLOW = 'FALLOW';
const UNFALLOW = 'UNFALLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage:1,
    isFetching: false
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
            return {...state, users: [...action.users]}
        }
        case SET_CURRENT_PAGE :{
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT :{
            return {...state, totalUsersCount: action.count}
        }
        case TOGGLE_IS_FETCHING :{
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state;
    }
}

export const fallow = (userId) => ({type: FALLOW, userId})
export const unfallow = (userId) => ({type: UNFALLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUserCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export default usersReducer;