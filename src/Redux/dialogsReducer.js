const NEW_MESSAGE_TEXT_BODY = 'NEW_MESSAGE_TEXT_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

const dialogsReducer = (State, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = State.NewMessageBody;
            State.MessageData.push({id: 4, message: body});
            State.NewMessageBody = ('');
            return State;
        case NEW_MESSAGE_TEXT_BODY:
            State.NewMessageBody = action.body;
            return State;
        default:
            return State;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body =>
    ({type: NEW_MESSAGE_TEXT_BODY, body: body}))

export default dialogsReducer;