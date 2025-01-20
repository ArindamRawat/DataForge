import Home from "./pages/Home";
import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './Pages/Login/Login';
import SignUp from './Pages/Signup/SignUp';
import Main from './Pages/main/Main';
import Files from './Pages/Files/Files';
import Visualize from "./pages/visualise/Visualize";

function App() {
  return (
    <>
    <Router>
    <Routes>
    
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='login' element={<Login/>}/>
          <Route exact path='signup' element={<SignUp/>}/>
          <Route exact path='/main' element={<Main/>}/>
          <Route exact path='/files' element={<Files/>}/>
          <Route path="/visualize/:fileId" element={<Visualize />} /> {/* Visualization page */}
        </Routes>
      
    </Router>
    </>
  )
}

export default App;
