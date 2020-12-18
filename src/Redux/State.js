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
            ]
        }
    },
    _callSubscriber(){
        console.log('lialia');
    },

    getState(){
        return this._State;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action){
        if (action.type === 'ADD-POST'){
            let NewPost = {
                id: 4,
                post: this._State.ProfilePage.newPostText,
                LikeCount: '0'
            };

            this._State.ProfilePage.PostsData.push(NewPost);
            this._State.ProfilePage.newPostText = ('');
            this._callSubscriber(this._State);
        }
        else if (action.type === 'APDATENEWPOSTTEXT'){
            this._State.ProfilePage.newPostText = action.NewText;
            this._callSubscriber(this._State);
        }
    }
}


export default store;