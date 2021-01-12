import {connect} from "react-redux";
import MyPost from "./MyPost";
import {addPost} from "../../../Redux/profileReducer";


const mapStateToProps = (state) => {
    return {
        PostsData: state.ProfilePage.PostsData,
        NewPostText: state.ProfilePage.NewPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    debugger
    return {
        addPost: (NewPostText) => {
            dispatch(addPost(NewPostText));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default MyPostsContainer;