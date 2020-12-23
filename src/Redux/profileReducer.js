const ADD_POST = 'ADD-POST';
const ADD_DATE_NEW_POST_TEXT = 'ADD_DATE_NEW_POST_TEXT';

let initialState = {
    PostsData: [
        {id: 1, post: 'Че молчим на че не пишем а?', LikeCount: '9'},
        {id: 2, post: 'Привет Мир!', LikeCount: '12'},
        {id: 3, post: 'Ну здарова чувак!', LikeCount: '32'}
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST :{
            let NewPost = {
                id: 4,
                post: state.newPostText,
                LikeCount: '0'
            };
            let stateCopy = {...state};
            stateCopy.PostsData = [...state.PostsData]
            stateCopy.PostsData.push(NewPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case ADD_DATE_NEW_POST_TEXT:{
            let stateCopy = {...state};

            stateCopy.newPostText = action.NewText;
            return state;
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>
    ({type: ADD_DATE_NEW_POST_TEXT, NewText: text})

export default profileReducer;