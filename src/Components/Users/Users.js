import React from 'react';
import s from './Users.module.css';
import PhotoAvaters from './../../assets/img/photoAvatar.png';

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
                    <img src={u.photos.small != null ? u.photos.small : PhotoAvaters} className={s.userPhoto}
                         alt='noPhoto'/>
                </div>
                <div>
                    {u.fallowed
                        ? <button onClick={() => {
                            props.unfallow(u.id)
                        }}>Удалить</button>
                        : <button onClick={() => {
                            props.fallow(u.id)
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