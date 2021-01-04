import React from 'react';
import s from './Users.module.css';
import PhotoAvaters from './../../assets/img/photoAvatar.png';
import {NavLink} from "react-router-dom";
import * as axios from "axios";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && s.currentActive}
                             onClick={() => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                    <img src={u.photos.small != null ? u.photos.small : PhotoAvaters} className={s.userPhoto}
                         alt='noPhoto'/>
                    </NavLink>
                </div>
                <div>{u.fallowed
                    ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                              onClick={() => {
                        props.toggleFollowingProgress(true, u.id);
                        axios.delete(`https://social-network.samuraijs.com/api/1.0/auth/profile/${u.id}`, {
                            withCredentials: true,
                            headers: {
                                "API-KEY": "09ddd3b4-64ae-492a-b0ea-82f76c89251b"
                            }
                        })
                            .then(response => {
                                if (response.data.resultCode === 0) {
                                    props.unfallow(u.id)
                                }
                                props.toggleFollowingProgress(false, u.id);
                            });
                    }}>Удалить</button>
                    : <button disabled={props.followingInProgress.some(id => id === u.id)}
                              onClick={() => {
                                  props.toggleFollowingProgress(true, u.id);
                                  axios.post(`https://social-network.samuraijs.com/api/1.0/profile/${u.id}`, {}, {
                                      withCredentials: true,
                                      headers: {
                                          "API-KEY": "09ddd3b4-64ae-492a-b0ea-82f76c89251b"
                                      }
                                  })
                                      .then(response => {
                                          if (response.data.resultCode === 0) {
                                              props.fallow(u.id)
                                          }
                                      })
                                  props.toggleFollowingProgress(false, u.id);
                              }}>Добавить</button>}

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
            </div>)
        }
    </div>
}

export default Users;