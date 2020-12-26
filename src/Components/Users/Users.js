import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';
import PhotoAvaters from './../../assets/img/photoAvatar.png';

class Users extends React.Component {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsersAC(response.data.items)
        });
    }

    render() {
        return <div>
            {this.props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photos.small != null ? u.photos.small : PhotoAvaters} className={s.userPhoto}
                         alt='noPhoto'/>
                </div>
                <div>
                    {u.fallowed
                        ? <button onClick={() => {
                            this.props.unfallowAC(u.id)
                        }}>Удалить</button>
                        : <button onClick={() => {
                            this.props.fallowAC(u.id)
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
}

export default Users;