
import './App.css';
import {Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import About from './pages/About';
import Policy from './pages/Policy';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashBoard from './pages/user/DashBoard';
import PrivateRoute from './components/Routes/Private.js';

function App() {
  return (
    <>
     <Routes>
       <Route path='/' element ={<HomePage/>}/>
       <Route path='/dashboard' element ={<PrivateRoute/>}>

       <Route path="" element={<DashBoard/>}/>
       </Route>
       <Route path='/register' element ={<Register/>}/>
       <Route path='/login' element ={<Login/>}/>
       <Route path='/about' element ={<About/>}/>
       <Route path='/policy' element ={<Policy/>}/>
       <Route path='/contact' element ={<Contact/>}/>
       <Route path='*' element ={<PageNotFound/>}/>
     </Routes>
    </>
  );
}

export default App;
