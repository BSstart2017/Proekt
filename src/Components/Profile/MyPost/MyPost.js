import React from 'react';
import s from './MyPost.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../Common/FormsControl/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";

const  maxLength10 = maxLengthCreator(10);

const MyPost = React.memo((props) => {

    let PostsElements = props.PostsData.map(p => <Post message={p.message} LikeCount={p.LikesCount}/>)

    let onAddPost = (values) => {
        debugger
        props.addPost(values.NewPostText);
    }
    return (
        <div className={s.DispleiblockAddPost}>
            <h3>Мои посты!</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.DescriptionPost}>{PostsElements}</div>
        </div>
    )
})

const addNewPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div><Field name="NewPostText" component={Textarea} validate={[required, maxLength10]}/></div>
        <div>
            <button>Добавить пост</button>
        </div>
    </form>
}

const AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(addNewPostForm);


export default MyPost;