import react from "react";
import classes from "./Dialogs.module.css";
import Message from "./Message";
import DialogItem from "./DialogItem";
import React from "react";
import {addMessageAction, updateNewMessageAction} from "../Redux/Dialog-reduser";



const Dialogs = (props) => {

    let newMessageElement = React.createRef()


    let addMessage = (e) => {
        let newMessage = e.target.value
        props.dispatch(addMessageAction(newMessage))
        newMessageElement.current.value = props.state.dialogPage.newMessageText
    }

    let onChangeMessage = (e) => {
        let text = e.target.value
        props.dispatch(updateNewMessageAction(text))
    }


    let dialogs = props.state.dialogPage.dataMessages.map(d => <Message text={d.message} id={d.id}/>)

    let nameUsers = props.state.dialogPage.dataUsers.map(user => <DialogItem name={user.name} id={user.id}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                <div>
                    {nameUsers}
                </div>
            </div>
            <div className={classes.messages}>
                {dialogs}
            </div>
            <div>
                <textarea className={classes.textarea}
                          ref={newMessageElement}
                          onChange={onChangeMessage}
                          value={props.newMessageText}
                           ></textarea>
                <div>
                    <button onClick={addMessage}
                        className={classes.sendButton}>send</button>
                </div>


            </div>
        </div>
    )
}

export default Dialogs