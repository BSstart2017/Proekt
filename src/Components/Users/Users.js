import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';
import PhotoAvaters from './../../assets/img/photoAvatar.png';

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUserCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for (let i=1; i <= pagesCount; i++){
            pages.push(i);
        }

        return <div>
            <div>
                {pages.map(p => {
                    return <span className={this.props.currentPage === p && s.currentActive}
                    onClick= {() =>{this.onPageChanged(p)} }>{p}</span>
                })}
            </div>
            {
                this.props.users.map(u => <div key={u.id}>
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