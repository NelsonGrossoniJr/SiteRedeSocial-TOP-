import './App.css'
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import DataHelper from './DataHelper.js'
  const DH = new DataHelper()

import Home from './components/pages/Home'
import PagesWraper from './components/pages/pagesWrapper'
import UserWraper from './components/pages/userWrapper'
import Login from './components/pages/Login'
import Explorar from './components/pages/Explorar'
import Feed from './components/pages/Feed'
import Perfil from './components/pages/Perfil'


export default function App() {
  const [user, setUser] = React.useState(0)
  const [key, FORCE_UPDATE] = React.useState(0)


  const handleLogin = (newUser) =>{
    setUser(newUser)
    FORCE_UPDATE(key+1)
  }

  
  return (
    <BrowserRouter>
          <PagesWraper key={key + 1} user={user} logout={() => setUser(0)}>
        <Routes>
          
          <Route path='*' 
            element={<Home key={key+0} user={user}/>}/> 
          
          <Route exact path='/explorar' 
            element={<Explorar key={key+2} user={user} />}/> 

          <Route exact path='/login' 
            element={<Login key={key+3} user={user} login={handleLogin}/>}/>
          
          <Route path='/user' 
            element={<UserWraper key={key+4} user={user}/>}>   
             
              <Route path='feed' 
                element={<Feed key={key+5} user={user} />}/> 
             
              <Route path='perfil/:useId' 
                element={<Perfil key={key+6} user={user}/>}/>
              <Route path='perfil/' 
                element={<Perfil key={key+6} user={user}/>}/>
            
          </Route>
        </Routes>
      </PagesWraper>
    </BrowserRouter>
  )
}

