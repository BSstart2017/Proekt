import React from 'react';
import {connect} from "react-redux";
import Header from "./Header";
import {getUserAuthData, logout} from "../../Redux/authReducer";


class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getUserAuthData();
    }

    render()
    {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect (mapStateToProps, {getUserAuthData, logout})(HeaderContainer);
