import reportWebVitals from './reportWebVitals';
import store from "./Redux/State";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

export let renderEntireTree = (State) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App State={State}
                     AddPost={store.AddPost.bind(store)}
                     apdateNewPostText={store.apdateNewPostText.bind(store)}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderEntireTree(store.getState());
store.subscribe(renderEntireTree);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
