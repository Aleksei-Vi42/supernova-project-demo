import classes from "./Dialogs.module.css";
import Message from "./Message";
import DialogItem from "./DialogItem";
import React from "react";


const Dialogs = (props) => {

    let dialogs = props.dialogPage.dataMessages.map(d => <Message text={d.message} id={d.id}/>)

    let nameUsers = props.dialogPage.dataUsers.map(user => <DialogItem name={user.name} id={user.id}/>)

    let newMessageElement = React.createRef()

    let addMessage = () => {
        props.addMessage()
        newMessageElement.current.value = props.dialogPage.newMessageText
    }

    let onChangeMessage = () => {
        let text = newMessageElement.current.value
        props.onChangeMessage(text)
    }


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
                          placeholder={'add message'}
                          ref={newMessageElement}
                          onChange={onChangeMessage}
                          value={props.newMessageText}
                ></textarea>
                <div>
                    <button onClick={addMessage}
                            className={classes.sendButton}>send
                    </button>
                </div>


            </div>
        </div>
    )
}

export default Dialogs