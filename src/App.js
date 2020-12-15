import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import TopFriends from "./Components/Friends/TopFriends"

function App(props) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/Profile' render={ () => <Profile State={props.State.ProfilePage}/>}/>
                    <Route path='/Dialogs' render={ () => <Dialogs State={props.State.DialogsPage}/>}/>
                    <Route path='/News' render={ () => <News/>}/>
                    <Route path='/Music' render={ () => <Music/>}/>
                    <Route path='/Settings' render={ () => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
);
}

export default App;
