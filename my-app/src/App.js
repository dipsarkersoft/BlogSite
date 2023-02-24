import React from 'react'
import {BrowserRouter,Routes, Route} from "react-router-dom"
import Navmenu from './components/Menu/Navmenu'
import Registration from './components/Registration/Registration'
 import {Toaster} from "react-hot-toast"

const App = () => {
  return (
    <BrowserRouter>
   {/* <Navmenu/> */}
   <Toaster position="top-center"/>

    <Routes>


  
  <Route path='/registration' element={<Registration/>} ></Route>
    </Routes>


    
    
    </BrowserRouter>


  )
}

export default App