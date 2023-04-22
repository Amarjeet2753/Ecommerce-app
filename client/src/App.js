
import './App.css';
import {Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import About from './pages/About';
import Policy from './pages/Policy';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';

// import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashBoard from './pages/user/DashBoard';
import PrivateRoute from './components/Routes/Private.js';
import ForgotPassword from './pages/Auth/ForgotPassword';
import AdminRoute from './components/Routes/AdminRoute';
import AdminDashboard from './pages/Admin/AdminDashboard';
import CreateCategory from './pages/Admin/CreateCategory';
import CreateProduct from './pages/Admin/CreateProduct';
import Users from './pages/Admin/Users';
import Profile from './pages/user/Profile';
import Orders from './pages/user/Orders';


function App() {
  return (
    <>
     <Routes>
       <Route path='/' element ={<HomePage/>}/>
       <Route path='/dashboard' element ={<PrivateRoute/>}>
          <Route path="user" element={<DashBoard/>}/>
          <Route path="user/profile" element={<Profile/>}/>
          <Route path="user/order" element={<Orders/>}/>
       </Route>
       <Route path='/dashboard' element ={<AdminRoute/>}>
       <Route path="admin" element={<AdminDashboard/>}/>
       <Route path="admin/create-category" element={<CreateCategory/>}/>
       <Route path="admin/create-product" element={<CreateProduct/>}/>
       <Route path="admin/users" element={<Users/>}/>
       </Route>
       <Route path='/register' element ={<Register/>}/>
       <Route path='/forgot-password' element ={<ForgotPassword/>}/>
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
