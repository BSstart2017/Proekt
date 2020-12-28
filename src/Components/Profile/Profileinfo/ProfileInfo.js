import React from 'react';
import s from './Profileinfo.module.css';
import PreLoader from "../../Common/Preloader/Preloader";

const Profileinfo = (props) => {

    if (!props.profile){
        return <PreLoader />
    }

    return (
        <div>
            <div><img src={props.profile.photos.large} alt='ava'/></div>
            <div>{props.profile.fullName}</div>
            <div>{props.profile.aboutMe}</div>
            <div>{props.profile.lookingForAJobDescription}</div>
        </div>
    )
}

export default Profileinfo;