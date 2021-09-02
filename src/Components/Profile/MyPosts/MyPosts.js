import React from 'react'
import Post from './Post/post'
import {Field, Form, reduxForm} from "redux-form";


const MyPosts = (props) => {
    let postsElement = props.dataPosts.map(p => <Post likesCount={p.likeCaunt} message={p.message}/>)


    let addNewPost = (value) => {
       props.addPost(value.newPostText)
    }



    return (
        <div className='content'>

            <div className='postBlock'>
                My posts
                  <MyPostReduxForm onSubmit={addNewPost}/>
                <div>
                    {postsElement}
                </div>
            </div>
        </div>
    )
}

const MyPostForm = (props) => {
    return (
        <Form onSubmit={props.handleSubmit}>
                    <Field component='textarea' name='newPostText' />
            <div>
                <button>add post</button>
            </div>

        </Form>

    )
}
const MyPostReduxForm = reduxForm ({form: 'myPost'})(MyPostForm )

export default MyPosts