import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={s.Dialogs}>
            <div className={s.DialogsItem}>
                <div className={s.Dialog}>
                    <NavLink to='/dialogs/1'>Саня</NavLink>
                </div>
                <div className={s.Dialog}>
                    <NavLink to='/dialogs/2'>Полина</NavLink>
                </div>
                <div className={s.Dialog}>
                    <NavLink to='/dialogs/3'>Андрей</NavLink>
                </div>
                <div className={s.Dialog}>
                    <NavLink to='/dialogs/4'>Никита</NavLink>
                </div>
                <div className={s.Dialog}>
                    <NavLink to='/dialogs/5'>Олеся</NavLink>
                </div>
                <div className={s.Dialog}>
                    <NavLink to='/dialogs/6'>Алиса</NavLink>
                </div>
            </div>
            <div className={s.Messages}>
                <div className={s.Message}>Привет</div>
                <div className={s.Message}>Ну здарова</div>
                <div className={s.Message}>Здоровей видали</div>
            </div>
        </div>
    )
}

export default Dialogs;