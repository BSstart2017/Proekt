const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.NewMessageBody;
            return {
                ...state,
                MessageData:[...state.MessageData, {id: 4, message: body} ],
        };
        default:
            return state;
    }
}

export const sendMessageCreator = (NewMessageBody) => ({type: SEND_MESSAGE, NewMessageBody})

export default dialogsReducer;