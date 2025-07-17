import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './Home'
import Counter from './Component/Counter'
import Asyncawait from './Component/Asyncawait'
import Todo from './Component/Todo'
import Crud from './Component/Crud'
import Apicrud from './Component/Apicrud'
import Register from './Component/Register'

const App = () => {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='counter' element={<Counter />}></Route>
          <Route path='asyncawait' element={<Asyncawait />}></Route>
          <Route path='todo' element={<Todo />}></Route>
          <Route path='crud' element={<Crud />}></Route>
          <Route path='apicrud' element={<Apicrud />}></Route>
          <Route path='register' element={<Register/>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
