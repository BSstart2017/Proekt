import React from 'react';
import {connect} from "react-redux";
import {
    fallow,
    setCurrentPage,
    setTotalUserCount,
    setUsers,
    toggleIsFetching,
    unfallow
} from "../../Redux/usersReducer";
import * as axios from "axios";
import Users from "./Users";
import PreLoader from "../Common/Preloader/Preloader";

class UserContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching (true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching (false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUserCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
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

const UsersContainer = connect(mapStateToProps, {
    fallow,
    setCurrentPage,
    setTotalUserCount,
    setUsers,
    toggleIsFetching,
    unfallow
})(UserContainer);

export default UsersContainer;