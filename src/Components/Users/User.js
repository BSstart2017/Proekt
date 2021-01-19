import React from 'react';
import s from './Users.module.css';
import PhotoAvaters from './../../assets/img/photoAvatar.png';
import {NavLink} from "react-router-dom";

let User = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <div>
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : PhotoAvaters} className={s.userPhoto}
                         alt='noPhoto'/>
                    </NavLink>
                </div>
                <div>{user.fallowed
                    ? <button disabled={followingInProgress.some(id => id === user.id)}
                              onClick={() => {
                                  unfollow(user.id)
                              }}>Удалить</button>
                    : <button disabled={followingInProgress.some(id => id === user.id)}
                              onClick={() => {
                                  follow(user.id)
                              }}>Добавить</button>}

                        </div>
            </span>
            <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                        </span>
            <span>
                        <div>{"user.location.country"}</div>
                        <div>{"user.location.city"}</div>
                        </span>
        </div>
    )
}

export default User;