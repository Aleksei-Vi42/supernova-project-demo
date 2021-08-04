import React from 'react'
import Post from './Post/post'
import {addPostAction, updateNewPostAction} from "../../Redux/Profile-reduser";


const MyPosts = (props) => {

    let postsElement = props.state.profilePage.dataPosts.map(p => <Post likesCount={p.likeCaunt} message={p.message}/>)

    let newPostElement = React.createRef()



    let addPost = () => {
        let text = newPostElement.current.value
        props.dispatch(addPostAction(text))
        newPostElement.current.value = props.state.profilePage.newPostText
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.dispatch(updateNewPostAction(text))
    }


    return (
        <div className='content'>

            <div className='postBlock'>
                My posts
                <div>
                    <textarea onChange={ onPostChange }
                              ref={ newPostElement }
                              value={ props.newPostText }/>
                    <div>
                        <button onClick={ addPost }>add post</button>
                    </div>

                </div>
                <div>
                    {postsElement}
                    <Post/>
                    <Post/>
                </div>
            </div>
        </div>
    )
}

export default MyPosts