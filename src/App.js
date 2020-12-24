import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import './App.css';
import {Route} from "react-router-dom";
import News from "./Components/Navbar/News/News";
import Music from "./Components/Navbar/Music/Music";
import Settings from "./Components/Navbar/Settings/Settings";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import Profile from "./Components/Profile/Profile";
import UsersContainer from "./Components/Users/UsersContainer";

const App = () => {
    return (
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/Profile' render={ () => <Profile />}/>
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
