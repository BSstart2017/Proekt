import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {fallowAC, setUsersAC, unfallowAC} from "../../Redux/usersReducer";



const mapStateToProps = (state) => {
    return {
        users: state.UsersPage.users
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        fallowAC: (userId) => {
            dispatch(fallowAC(userId))
        },
        unfallowAC: (userId) => {
            dispatch(unfallowAC(userId))

        },
        setUsersAC: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;