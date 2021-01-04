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
import Users from "./Users";
import PreLoader from "../Common/Preloader/Preloader";
import {usersAPI} from "../../api/api";


class UserContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching (true);
        usersAPI.getUsers(this.props.currentPage,this.props.pageSize).then(data => {
                this.props.toggleIsFetching (false);
                this.props.setUsers(data.items);
                this.props.setTotalUserCount(data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(pageNumber,this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
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