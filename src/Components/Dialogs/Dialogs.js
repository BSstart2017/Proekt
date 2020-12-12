import React from "react";
import s from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={s.Dialogs}>
            <div className={s.DialogsItem}>
                <div className={s.Dialog + ' ' + s.activeItem}>Саня</div>
                <div className={s.Dialog}>Полина</div>
                <div className={s.Dialog}>Андрей</div>
                <div className={s.Dialog}>Никита</div>
                <div className={s.Dialog}>Олеся</div>
                <div className={s.Dialog}>Алиса</div>
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