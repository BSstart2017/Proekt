import React from 'react';
import s from './Navbar.module.css';

const Navbar = () => {
    return <nav className={s.nav}>
        <div className={s.post}>
            <div className={s.item}>
                <a href="">Profile</a>
            </div>
            <div className={s.item}>
                <a href="">Messages</a>
            </div>
            <div className={s.item}>
                <a href="">Music</a>
            </div>
            <div className={s.item}>
                <a href="">Setings</a>
            </div>
        </div>
    </nav>
}

export default Navbar;