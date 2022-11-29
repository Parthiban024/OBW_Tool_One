import './components/Login/module.css'
import './components/Signup/module.css'
import './components/Dashboard/styles.module.css'
import { Route, Routes, Navigate } from 'react-router-dom';
import Main from './components/Dashboard';
import Signup from "./components/Signup";
import Login from './components/Login/Index';
import Forget from './components/fgt_pwd';

function App() { 
  const user = localStorage.getItem("token")
  return (
    <div className="App">
     <Routes>
      <Route path="/main" exact element={<Main/>}/>
      <Route path="/signup" exact element={<Signup/>}/>
      <Route path="/login" exact element={<Login/>}/>
      <Route path="/fgt_pwd" exact element={<Forget/>}/>
      <Route path="/" exact element={<Navigate replace to="/login"/>}/>
     </Routes>
    </div>
  );
}

export default App;
