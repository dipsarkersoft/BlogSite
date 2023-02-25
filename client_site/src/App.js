import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Navmenu from './components/Menu/Navmenu'
import Registration from './components/Registration/Registration'
import { Toaster } from "react-hot-toast"
import Login from './components/Login/Login'
import CreatePost from './components/CreatePost/CreatePost'
import Allpost from './components/AllPost/Allpost'
import SelectPost from './components/AllPost/SelectPost'
import UserOwnPost from './components/UserAllPost/UserOwnPost'
import UpdatePost from './components/UpdatePost/UpdatePost'
import { getToken } from './helper/SesssionHelper'
import ModalMenu from './components/Menu/Modal'


const App = () => {

  if (getToken()) {
    return (
      <>
        <BrowserRouter>
          <Navmenu />
          <Toaster position="top-center" />
          <Routes>
            <Route path='/create' element={<CreatePost />} ></Route>
            <Route path='/' element={<Allpost />} ></Route>
            <Route path='/dashboard' element={<UserOwnPost />} ></Route>
            <Route path='/UpdatePost/:id' element={<UpdatePost />} ></Route>
            <Route path='/selectpost/:id' element={<SelectPost />} ></Route>
          </Routes>
        </BrowserRouter>

      </>
    )
  }
  else {
    return (
      <>
        <BrowserRouter>
        <ModalMenu/>

          <Toaster position="top-center" />
          <Routes>
            {/* <Route path="/" element={<Navigate to="/login" replace />}/> */}
            <Route path='/registration' element={<Registration />} ></Route>
            <Route path='/login' element={ <Login />} ></Route>
            <Route path='/' element={<Allpost />} ></Route>
            <Route path='/selectpost/:id' element={<SelectPost />} ></Route>
          </Routes>
        </BrowserRouter>

      </>
    )

  }

}

export default App