import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { useState } from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = () => {
        setIsAuthenticated(true);
    };

    const logout = () => {
        setIsAuthenticated(false);
    };
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />}></Route>
      <Route path='/signup' element={<Signup />}></Route>
      <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/" />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
