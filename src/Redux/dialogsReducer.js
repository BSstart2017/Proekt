const NEW_MESSAGE_TEXT_BODY = 'NEW_MESSAGE_TEXT_BODY';
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
    ],
    NewMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = state.NewMessageBody;
            state.MessageData.push({id: 4, message: body});
            state.NewMessageBody = ('');
            return state;
        case NEW_MESSAGE_TEXT_BODY:
            state.NewMessageBody = action.body;
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body =>
    ({type: NEW_MESSAGE_TEXT_BODY, body: body}))

export default dialogsReducer;