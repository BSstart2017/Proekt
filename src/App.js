import Navbar from "./Components/Navbar/Navbar";
import './App.css';
import {Route} from "react-router-dom";
import News from "./Components/Navbar/News/News";
import Music from "./Components/Navbar/Music/Music";
import Settings from "./Components/Navbar/Settings/Settings";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";

const App = () => {
    return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/Profile/:userId?' render={ () => <ProfileContainer />}/>
                    <Route path='/Dialogs' render={ () => <DialogsContainer />}/>
                    <Route path='/News' render={ () => <News/>}/>
                    <Route path='/Users' render={ () => <UsersContainer/>}/>
                    <Route path='/Music' render={ () => <Music/>}/>
                    <Route path='/Settings' render={ () => <Settings/>}/>
                </div>
            </div>
);
}

export default App;
