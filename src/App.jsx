
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Fetchapi from './Component/Fetchapi'
import Asyncawait from "./Component/Asyncawait";
import Counter from "./Component/Counter";
import Register from "./Component/Register";
import Loginform from './Component/Loginform';
import Apicrud from './Component/Apicrud';
import Todolist from './Component/Todolist';
import Products from './Products';
import Services from './Services';
import Contact from './Contact';






const App = () => {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='fetchapi' element={<Fetchapi />}></Route>
          <Route path='awaitdata' element={<Asyncawait />}></Route>
          <Route path='counter' element={<Counter />}></Route>
          <Route path='register' element={<Register />}></Route>
          <Route path='login' element={<Loginform />}></Route>
          <Route path='crud' element={<Apicrud />}></Route>
          <Route path='list' element={<Todolist />}></Route>
          <Route path='cardproduct' element={<Products />}></Route>
          <Route path='servicecard' element={<Services />}></Route>
          <Route path='contact' element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
