import {connect} from "react-redux";
import MyPost from "./MyPost";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profileReducer";


const mapStateToProps = (state) => {
    return {
        PostsData: state.ProfilePage.PostsData,
        newPostText: state.ProfilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        addPostActionCreator: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostTextActionCreator: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default MyPostsContainer;