
import './App.css'
import React from 'react' 
import Header from './Components/Header'
import NavBar from './Components/NavBar'
import Profile from './Components/Profile'

const App = () => {
  return (
   <div className='app-wrapper'>
    <Header />
    <NavBar />
    <Profile />   
  </div>
      
  )
}


export default App;
