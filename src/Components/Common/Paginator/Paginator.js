import React from 'react';
import s from './Paginators.module.css';


let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
debugger
    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
            {pages.map(p => {
                return <span className={currentPage === p && s.currentActive}
                             onClick={() => {
                                 onPageChanged(p)
                             }}>{p}</span>
            })}
        </div>
}

export default Paginator;