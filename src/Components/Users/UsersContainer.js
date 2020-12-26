import {connect} from "react-redux";
import Users from "./Users";
import {fallowAC, setCurrentPageAC, setTotalUserCountAC, setUsersAC, unfallowAC} from "../../Redux/usersReducer";



const mapStateToProps = (state) => {
    return {
        users: state.UsersPage.users,
        pageSize: state.UsersPage.pageSize,
        totalUsersCount: state.UsersPage.totalUsersCount,
        currentPage: state.UsersPage.currentPage
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        fallow: (userId) => {
            dispatch(fallowAC(userId))
        },
        unfallow: (userId) => {
            dispatch(unfallowAC(userId))

        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUserCount: (totalCount) => {
            dispatch(setTotalUserCountAC(totalCount))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;