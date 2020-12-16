import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {AddPost} from "./Redux/State";

export let renderEntireTree = (State) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App State={State} AddPost={AddPost}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
