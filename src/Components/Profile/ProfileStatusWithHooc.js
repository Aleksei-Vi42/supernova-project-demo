import React, {useEffect, useState} from "react"


const ProfileStatusWithHook = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMod = () => {
        setEditMode(true)
    }

    const deActivateEditMod = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode
                ?
                <div>
                    <span onDoubleClick={activateEditMod}>{props.status || 'No status'}</span>
                </div>
                :
                <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deActivateEditMod}
                           value={status}/>
                </div>
            }
        </div>
    )
}
export default ProfileStatusWithHook