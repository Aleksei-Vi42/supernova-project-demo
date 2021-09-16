import {applyMiddleware, combineReducers, createStore} from "redux"
import dialogReducer from "./DialogReducer"
import profileReduser from "./ProfileReduser"
import sideBarReducer from "./SideBarReducer"
import usersReducer from "./UsersReducer"
import authReducer from "./AuthReducer"
import thunkMiddleware from "redux-thunk"
import { reducer } from 'redux-form'
import appReducer from "./AppReducer";

let redusers = combineReducers({
    dialogPage: dialogReducer,
    profilePage: profileReduser,
    sideBarPage: sideBarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: reducer,
})

let store = createStore(redusers, applyMiddleware(thunkMiddleware))
window.store = store
export default store