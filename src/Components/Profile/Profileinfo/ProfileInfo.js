import React from 'react';
import s from './Profileinfo.module.css';
import PreLoader from "../../Common/Preloader/Preloader";

const Profileinfo = (props) => {

    if (!props.profile){
        return <PreLoader />
    }


    return (
        <div>
            <div>
                <img src="https://klike.net/uploads/posts/2019-07/1562069947_1.jpg" alt="logo2"/>
            </div>
            <div><img src={props.profile.photos.large}/></div>
            <div>{props.profile.fullName}</div>
            <div>{props.profile.aboutMe}</div>
            <div>{props.profile.lookingForAJobDescription}</div>
        </div>
    )
}

export default Profileinfo;