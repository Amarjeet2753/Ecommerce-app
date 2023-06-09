import React, { useState } from "react";

import Layout from "../../components/Layout/Layout";

import toast from 'react-hot-toast';
import axios from 'axios'
import { json, useNavigate ,useLocation} from "react-router-dom";
import "../../styles/authStyles.css"

import { useAuth } from "../../context/auth";


const Login = () => {

  const [auth,setAuth] = useAuth();
   
 
    const [email,setEmail] =useState("");
    const [password,setPassword] =useState("");
  
   
    const navigate = useNavigate();
    const location = useLocation();
    const handleSubmit = async (e)=>{
      e.preventDefault();
         
     
      try{
        const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`,{email,password});

        if(res.data.success){

            toast.success(res.data.msg);
            setAuth({
              ...auth,
              user : res.data.user,
              token : res.data.token,
            })
            localStorage.setItem('auth',JSON.stringify(res.data))
            navigate(location.state ||'/');
        }
        else{
            toast.error(res.data.msg)

        }
      }catch(error){
         console.log(error);
         toast.error('Something went wrong')
      }

    }

  return (
    <Layout title="Login - ecommerce ">
    <div className="form-container">
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
       
        <div className="mb-3">
          <input
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="form-control"
            id="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="form-control"
            id="password"
            placeholder="Enter your password"
            required
          />
        </div>
        
        <div className="mb-3">
          
        <button type="submit" className="btn btn-primary">
          Login
        </button>
        </div>

        <div className="md-3">
        <button type="button " className="btn btn-primary" onClick={()=>{navigate('/forgot-password')}}>
          Forgot Password
        </button>
        </div>
       

       
      </form>
    </div>
  </Layout>
  )
}

export default Login