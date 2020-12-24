import React from 'react';
import s from './Users.module.css';

const Users = (props) => {
    if (props.users.length === 0){
        props.setUsersAC ([
            {id: 1, photoUrl: 'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg',
                fallowed: false, fullName: 'Андреев Андрей', status: 'Жизнь прекрасна и удевительна!',
                location: {city: 'Орша', country: 'Беларусь'}},
            {id: 2, photoUrl: 'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg',
                fallowed: true, fullName: 'Андреева Полина', status: 'Всё круто!',
                location: {city: 'Торунь', country: 'Польша'}},
            {id: 3, photoUrl: 'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg',
                fallowed: false, fullName: 'Андреева Алиса', status: 'Оу ееее найс вери бля!',
                location: {city: 'Моска', country: 'Россия'}}
            ]
        )
    }
    return <div>
        {props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img scr={u.photoUrl} className={s.userPhoto}/>
                </div>
                <div>
                    {u.fallowed
                        ? <button onClick={() => {props.unfallowAC(u.id)}}>Удалить</button>
                        : <button onClick={() => {props.fallowAC(u.id)}}>Добавить</button>}
                </div>
            </span>
            <span>
                 <div>{u.fullName}</div>
                <div>{u.status}</div>
            </span>
        </div>)}
    </div>
}

export default Users;