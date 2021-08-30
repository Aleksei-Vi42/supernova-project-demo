import React from 'react'
import Post from './Post/post'



const MyPosts = (props) => {
    let postsElement = props.dataPosts.map(p => <Post likesCount={p.likeCaunt} message={p.message}/>)

    let newPostElement = React.createRef()

    let addPost = () => {
        props.addPost()
        newPostElement.current.value = props.newPostText
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.onPostChange(text)
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
                </div>
            </div>
        </div>
    )
}

export default MyPosts