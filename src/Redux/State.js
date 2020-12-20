const ADD_POST = 'ADD-POST';
const ADD_DATE_NEW_POST_TEXT = 'ADD_DATE_NEW_POST_TEXT';
const NEW_MESSAGE_TEXT_BODY = 'NEW_MESSAGE_TEXT_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let store = {
    _State: {
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
            ],
            NewMessageBody: ''
        }
    },
    _callSubscriber(){
        console.log('');
    },

    getState(){
        return this._State;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action){
        if (action.type === ADD_POST){
            let NewPost = {
                id: 4,
                post: this._State.ProfilePage.newPostText,
                LikeCount: '0'
            };

            this._State.ProfilePage.PostsData.push(NewPost);
            this._State.ProfilePage.newPostText = ('');
            this._callSubscriber(this._State);
        }
        else if (action.type === ADD_DATE_NEW_POST_TEXT){
            this._State.ProfilePage.newPostText = action.NewText;
            this._callSubscriber(this._State);
        }
        else if (action.type === NEW_MESSAGE_TEXT_BODY){
            this._State.DialogsPage.NewMessageBody = action.body;
            this._callSubscriber(this._State);
        }
        else if (action.type === SEND_MESSAGE){
            let body = this._State.DialogsPage.NewMessageBody;
            this._State.DialogsPage.NewMessageBody = ('');
            this._State.DialogsPage.MessageData.push({id: 4, message: body });
            this._callSubscriber(this._State);
        }
    }
}

export const addPostActionCreator = () => ({type : ADD_POST})
export const updateNewPostTextActionCreator = (text) =>
    ({type : ADD_DATE_NEW_POST_TEXT, NewText: text})

export const sendMessageCreator = () => ({type : SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body =>
    ({type : NEW_MESSAGE_TEXT_BODY, body: body}))

export default store;