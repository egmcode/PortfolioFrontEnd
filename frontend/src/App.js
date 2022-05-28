import React, {Component} from 'react';
import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import Register from './components/Register';
import ManageUser from './components/ManageUser';
import ResetReq from './components/ResetReq';
import ResetForm from './components/ResetForm';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';

class App extends Component
{
  render()
  {
    return (
      <>
        <div className="bg-img-fix"></div>
        <Router>
          <Routes>
            <Route path='/' index element={<Home />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/register' element={<Register />}/>
            <Route path='/manage' element={<ManageUser />}/>
            <Route path='/reset' element={<ResetReq />}/>
            <Route path='/resetpassword/:token' element={<ResetForm />}/>
            <Route path='*' element={<Navigate to='/'/>} />
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
