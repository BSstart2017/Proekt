import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {

    return <header className={s.header}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Mega_Image_Logo.png/800px-Mega_Image_Logo.png" alt="logo"/>
        <div className={s.loginStyle}>{ props.isAuth ? props.login
            : <NavLink to='/Login' className={s.colorLogin}>Вход</NavLink>}
        </div>
    </header>
}

export default Header;