import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/SignUp/Signup';
import Navbar from './Components/Navbar/Navbar'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </Router>
  )
}

export default App;