import React, {useState} from 'react';
import s from './Profileinfo.module.css';
import {setStatus} from "../../../Redux/profileReducer";


const ProfileStatusWithHooks = (props) =>{
debugger
    let [editMode, setEditMode] = useState(false);
    let [status, setEditStatus] = useState(props.status);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () =>{
        setEditStatus(false);
        props.updateStatus(status);
    }

    const onStatusChange =(e)=>{
        setStatus(e.currentTarget.value);
    }

        return (
            <div>
                {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{status || "Введите свой статус!"}</span>
                </div>
                }

                {editMode &&
                <div>
                    <input onChange={onStatusChange} autoFocus={true}
                           onBlur={deactivateEditMode} value={status}/>
                </div>
                }
            </div>
        )
    }

export default ProfileStatusWithHooks;
