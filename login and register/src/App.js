import './App.css';
import Homepage from "./components/homepage/homepage";
import Login from "./components/login/login";
import Register from "./components/register/register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Service from './components/homepage/Service';
import Readings from './components/homepage/Readings';

function App() {

  const [ user, setLoginUser] = useState({})
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={user && user?._id? <Homepage setLoginUser={setLoginUser}/> : <Login setLoginUser={setLoginUser} />}/>
          <Route path="/login" element={<Login setLoginUser={setLoginUser}/>}/>
          <Route path="/register"  element={<Register />} />
          <Route path="/Service"  element={<Service />} />
          <Route path="/Readings"  element={<Readings />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
