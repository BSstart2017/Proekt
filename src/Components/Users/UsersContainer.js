import React from 'react';
import {connect} from "react-redux";
import {
    setCurrentPage,
    toggleFollowingProgress,
    requestUsers
} from "../../Redux/usersReducer";
import Users from "./Users";
import PreLoader from "../Common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers
} from "../../Redux/Users-selectors";



class UserContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <PreLoader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   fallow={this.props.fallow}
                   unfallow={this.props.unfallow}
                   followingInProgress={this.props.followingInProgress}/>
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(
    connect(mapStateToProps, {setCurrentPage, toggleFollowingProgress, getUsers: requestUsers})
)(UserContainer);
