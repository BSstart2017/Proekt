import React from 'react';
import {connect} from "react-redux";
import {getUserProfile} from "../../Redux/profileReducer";
import Profile from "./Profile";
import {Redirect, withRouter} from 'react-router-dom';

class ProfileContainer extends  React.Component {
    componentDidMount() {

        let userId = this.props.match.params.userId;
        if(!userId)
        {userId=2;}

       this.props.getUserProfile(userId)
    }

    render() {

        if (!this.props.isAuth) return <Redirect to={"/Login"}/>

        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
        }
    }

const mapStateToProps = (state) => ({
        profile: state.ProfilePage.profile,
        isAuth: state.auth.isAuth
});

let WithUrlDataCortainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps,{getUserProfile})(WithUrlDataCortainerComponent);
