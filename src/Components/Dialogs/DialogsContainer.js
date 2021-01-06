import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/dialogsReducer";

const mapStateToProps = (state) => {
    return {
        DialogsData: state.DialogsPage.DialogsData,
        MessageData: state.DialogsPage.MessageData,
        NewMessageBody: state.DialogsPage.NewMessageBody,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator())
        },
        updateNewMessageBody: (body) => {
            let action = updateNewMessageBodyCreator(body);
            dispatch(action);
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;