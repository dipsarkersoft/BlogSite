import React from 'react'
import {BrowserRouter,Routes, Route} from "react-router-dom"
import Navmenu from './components/Menu/Navmenu'
import Registration from './components/Registration/Registration'
 import {Toaster} from "react-hot-toast"
import Login from './components/Login/Login'
import CreatePost from './components/CreatePost/CreatePost'
import Allpost from './components/AllPost/Allpost'
import SelectPost from './components/AllPost/SelectPost'



const App = () => {
  return (
    <BrowserRouter>
   {/* <Navmenu/> */}
   <Toaster position="top-center"/>

    <Routes>


  
  <Route path='/registration' element={<Registration/>} ></Route>
  <Route path='/login' element={<Login/>} ></Route>
  <Route path='/create' element={<CreatePost/>} ></Route>
  <Route path='/' element={<Allpost/>} ></Route>
  
  <Route path='/selectpost/:id' element={<SelectPost/>} ></Route>

    </Routes>


    
    
    </BrowserRouter>


  )
}

export default App