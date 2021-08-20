
import React from "react";
import {addMessageAction, updateNewMessageAction} from "../Redux/Dialog-reduser";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage,
        newMessageText: state.dialogPage.newMessageText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageAction())
        },
         onChangeMessage: (text) => {
             dispatch(updateNewMessageAction(text))
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


export default DialogsContainer