import React from "react"
import {LoginReduxForm} from "./LoginForm";


class LoginPageContainer extends React.Component {

    componentDidMount() {
    }

    loginUser = (value) => {
        alert(value)
         }


        render () {
            return <div>
                <h1>LOGIN</h1>
                <LoginReduxForm onSubmit={this.props.loginUser}/>
            </div>

        }
}




export default LoginPageContainer
