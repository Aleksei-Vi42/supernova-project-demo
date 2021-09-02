import React from 'react'
import {addPostAction, updateNewPostAction} from '../../Redux/Profile-reduser'
import MyPosts from './MyPosts'
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
    return {
        dataPosts: state.profilePage.dataPosts,
        newPostText: state.profilePage.newPostText,
        profile: state.profile
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            dispatch(addPostAction(newPostText))
        },
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

/* let addPost = () => {
     let action = addPostAction()
     props.store.dispatch(action)

 }*/

/* let onPostChange = (text) => {
     let action = updateNewPostAction(text)
     props.store.dispatch(action)
 }*/

/*
    return <MyPosts updateNewPostText={onPostChange} addPost={addPost}
                    dataPosts={props.state.profileReduser.profilePage.dataPosts}
                    newPostText={props.state.profileReduser.profilePage.newPostText}/>
*/


export default MyPostsContainer