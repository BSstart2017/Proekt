const ADD_POST = 'ADD-POST';
const ADD_DATE_NEW_POST_TEXT = 'ADD_DATE_NEW_POST_TEXT';

const profileReducer = (State, action) => {
    switch (action.type) {
        case ADD_POST :
            let NewPost = {
                id: 4,
                post: State.newPostText,
                LikeCount: '0'
            };
            State.PostsData.push(NewPost);
            State.newPostText = ('');
            return State;
        case ADD_DATE_NEW_POST_TEXT:
            State.newPostText = action.NewText;
            return State;
        default:
            return State;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>
    ({type: ADD_DATE_NEW_POST_TEXT, NewText: text})

export default profileReducer;