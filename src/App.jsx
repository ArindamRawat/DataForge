import Home from "./pages/Home";
import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './pages/Login/Login';
import SignUp from './pages/Signup/SignUp';
import Main from './pages/main/Main';
import Files from './pages/Files/Files';
import Visualize from "./pages/visualise/Visualize";

function App() {
  return (
    <>
    <Router>
    <Routes>
    
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/signup' element={<SignUp/>}/>
          <Route exact path='/main' element={<Main/>}/>
          <Route exact path='/files' element={<Files/>}/>
          <Route path="/visualize/:fileId" element={<Visualize />} /> {/* Visualization page */}
        </Routes>
      
    </Router>
    </>
  )
}

export default App;
