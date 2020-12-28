import React from 'react';
import {connect} from "react-redux";
import {
    fallowAC,
    setCurrentPageAC,
    setTotalUserCountAC,
    setUsersAC,
    toggleIsFetchingtAC,
    unfallowAC
} from "../../Redux/usersReducer";
import * as axios from "axios";
import Users from "./Users";
import PreLoader from "../Common/Preloader/Preloader";

class UserContainer extends React.Component {
    componentDidMount() {
        this.props.toggleisfething(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleisfething (false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUserCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleisfething(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleisfething(false);
                this.props.setUsers(response.data.items);
            });
    }

    render()
    {
        return <>
            {this.props.isFetching ? <PreLoader /> : null }
        <Users totalUsersCount = {this.props.totalUsersCount}
                      pageSize = {this.props.pageSize}
                      currentPage = {this.props.currentPage}
                      onPageChanged = {this.onPageChanged}
                      users = {this.props.users}
                      fallow = {this.props.fallow}
                      unfallow = {this.props.unfallow}/>
    </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.UsersPage.users,
        pageSize: state.UsersPage.pageSize,
        totalUsersCount: state.UsersPage.totalUsersCount,
        currentPage: state.UsersPage.currentPage,
        isFetching: state.UsersPage.isFetching
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
        },
        toggleisfething: (isFetching) => {
            dispatch(toggleIsFetchingtAC(isFetching))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UserContainer);

export default UsersContainer;