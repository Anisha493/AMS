import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Content from './pages/Content/Content';
import Help from './pages/Help/Help';
import SignIn from './pages/SignIn/SignIn';
import Register from './pages/Register/Register';

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/home' element={<Home/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/content' element={<Content/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/help' element={<Help/>} />
      <Route path='/signIn' element={<SignIn/>} />
      <Route path='/register' element={<Register/>} />
    </Routes>
    </BrowserRouter>

  )
}

export default App


