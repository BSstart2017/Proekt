import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';
import PhotoAvaters from './../../assets/img/photoAvatar.png';

const Users = (props) => {
    if (props.users.length === 0){
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsersAC (response.data.items)
        });

    }
    return <div>
        {props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photos.small != null ? u.photos.small : PhotoAvaters} className={s.userPhoto} alt='noPhoto'/>
                </div>
                <div>
                    {u.fallowed
                        ? <button onClick={() => {props.unfallowAC(u.id)}}>Удалить</button>
                        : <button onClick={() => {props.fallowAC(u.id)}}>Добавить</button>}
                </div>
            </span>
            <span>
                 <div>{u.name}</div>
                <div>{u.status}</div>
            </span>
            <span>
                 <div>{"u.location.country"}</div>
                <div>{"u.location.city"}</div>
            </span>
        </div>)}
    </div>
}

export default Users;