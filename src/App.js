import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {HomePage} from './pages/HomePage/loadable'
import {NotFoundPage} from './pages/NotFoundPage/loadable'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
