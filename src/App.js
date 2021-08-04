import './App.css'
import React from 'react'
import Header from './Components/Header/Header'
import NavBar from './Components/NavBar/NavBar'
import Profile from './Components/Profile/Profile'
import Dialogs from './Components/Dialogs/Dialogs'
import {BrowserRouter, Route} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Setting from "./Components/Setting/Setting";
import Friends from "./Components/Friends/Friends";



const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <Dialogs dispatch={props.dispatch} state={props.state}/>}/>
                    <Route path='/profile' render={() => <Profile dispatch={props.dispatch} state={props.state}/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/setting' render={() => <Setting/>}/>
                    <Route path='/friends' render={() => <Friends/>}/>
                </div>
            </div>
        </BrowserRouter>

    )
}


export default App;
