import React, { useEffect } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {HomePage} from './pages/HomePage/loadable'
import Register from './pages/Register/register.js'
import SignIn from './pages/SignIn/signin.js'
import {NotFoundPage} from './pages/NotFoundPage/loadable'
import { useDispatch } from 'react-redux'
import { getCurrentUser } from './store/auth/thunks'


function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCurrentUser())
  }, [dispatch])

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/signin" element={<SignIn/>}/>
        <Route element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
