import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return <header className={s.header}>
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Mega_Image_Logo.png/800px-Mega_Image_Logo.png"
            alt="logo"/>
    </header>
}

export default Header;