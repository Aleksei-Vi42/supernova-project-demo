import {applyMiddleware, combineReducers, createStore} from "redux"
import dialogReduser from "./Dialog-reduser"
import profileReduser from "./Profile-reduser"
import sideBarReduser from "./SideBar-reduser"
import usersReduser from "./UsersReduser"
import authReduser from "./AuthReduser"
import thunkMiddleware from "redux-thunk"

let redusers = combineReducers({
    dialogPage: dialogReduser,
    profilePage: profileReduser,
    sideBarPage: sideBarReduser,
    usersPage: usersReduser,
    auth: authReduser
})

let store = createStore(redusers, applyMiddleware(thunkMiddleware))
window.store = store
export default store