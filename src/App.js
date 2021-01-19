import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import './App.css';
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import News from "./Components/Navbar/News/News";
import Music from "./Components/Navbar/Music/Music";
import Settings from "./Components/Navbar/Settings/Settings";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import {Component} from "react/cjs/react.production.min";
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import {initializedApp} from "./Redux/appReducer";
import PreLoader from "./Components/Common/Preloader/Preloader";
import store from "./Redux/store";



class App extends Component {

   componentDidMount() {
          this.props.initializedApp();
    }

    render() {
        if (!this.props.initialized){
            return <PreLoader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/Profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/Dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/News' render={() => <News/>}/>
                    <Route path='/Users' render={() => <UsersContainer/>}/>
                    <Route path='/Music' render={() => <Music/>}/>
                    <Route path='/Settings' render={() => <Settings/>}/>
                    <Route path='/Login' render={() => <Login/>}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps,{initializedApp}))(App);

const SamuraiJSApp = (props) => {
  return  <BrowserRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </BrowserRouter>
}

export default SamuraiJSApp;