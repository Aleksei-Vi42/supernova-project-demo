import {combineReducers, createStore} from "redux";
import dialogReduser from "./Dialog-reduser";
import profileReduser from "./Profile-reduser";
import sideBarReduser from "./SideBar-reduser";
import usersReduser from "./UsersReduser";

let redusers = combineReducers({
    dialogPage: dialogReduser,
    profilePage: profileReduser,
    sideBarReduser,
    usersPage: usersReduser
})

let store = createStore(redusers)
window.store = store
export default store