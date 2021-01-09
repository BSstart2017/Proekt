import React from 'react';
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../Redux/profileReducer";
import Profile from "./Profile";
import {Redirect, withRouter} from 'react-router-dom';
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class ProfileContainer extends  React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId)
        {userId=13552;}

       this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }
    render() {
        if (!this.props.isAuth) return <Redirect to={"/Login"}/>
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        )
        }
    }

const mapStateToProps = (state) => ({
        profile: state.ProfilePage.profile,
        status: state.ProfilePage.status
});

export default compose(
    connect(mapStateToProps,{getUserProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);