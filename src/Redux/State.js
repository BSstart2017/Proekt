import {renderEntireTree} from "../render";

let State = {
    ProfilePage: {
        PostsData: [
            {id: 1, post: 'Че молчим на че не пишем а?', LikeCount: '9'},
            {id: 2, post: 'Привет Мир!', LikeCount: '12'},
            {id: 3, post: 'Ну здарова чувак!', LikeCount: '32'}
        ],
        newPostText: 'Sania axaxa'
    },

    DialogsPage: {
        DialogsData: [
            {id: 1, name: 'Саня'},
            {id: 2, name: 'Андрей'},
            {id: 3, name: 'Никита'},
            {id: 4, name: 'Олеся'},
            {id: 5, name: 'Полина'},
            {id: 6, name: 'Алиса'}
        ],
        MessageData: [
            {id: 1, message: 'Привет'},
            {id: 2, message: 'Ну здарова'},
            {id: 3, message: 'Здоровей видали'}
        ]
    }
}

export let AddPost = () => {

    let NewPost = {
        id: 4,
        post: State.ProfilePage.newPostText,
        LikeCount: '0'
    };

    State.ProfilePage.PostsData.push(NewPost);
    State.ProfilePage.newPostText = ('');
    renderEntireTree(State);
}

export let apdateNewPostText = (NewText) => {
    State.ProfilePage.newPostText = NewText;
    renderEntireTree(State);
}

export default State;