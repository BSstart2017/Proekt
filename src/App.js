import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import './App.css';
import {Route} from "react-router-dom";
import News from "./Components/Navbar/News/News";
import Music from "./Components/Navbar/Music/Music";
import Settings from "./Components/Navbar/Settings/Settings";

function App(props) {
    return (
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/Profile' render={ () => <Profile
                        State={props.State.ProfilePage}
                        dispatch={props.dispatch}/>}/>
                    <Route path='/Dialogs' render={ () => <Dialogs store={props.store}/>}/>
                    <Route path='/News' render={ () => <News/>}/>
                    <Route path='/Music' render={ () => <Music/>}/>
                    <Route path='/Settings' render={ () => <Settings/>}/>
                </div>
            </div>
);
}

export default App;
