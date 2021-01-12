import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {sendMessageCreator} from "../../Redux/dialogsReducer";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

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
        sendMessage: (NewMessageBody) => {
            dispatch(sendMessageCreator(NewMessageBody))
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
    )(Dialogs);
