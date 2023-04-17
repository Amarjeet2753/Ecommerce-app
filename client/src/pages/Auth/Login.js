import React, { useState } from "react";

import Layout from "../../components/Layout/Layout";

import toast from 'react-hot-toast';
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import "../../styles/authStyles.css"


const Login = () => {

   
 
    const [email,setEmail] =useState("");
    const [password,setPassword] =useState("");
  
   
    const navigate = useNavigate()
    const handleSubmit = async (e)=>{
      e.preventDefault();
         
     
      try{
        const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`,{email,password});

        if(res.data.success){

            toast.success(res.data.msg);
            navigate('/');
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

       

        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  </Layout>
  )
}

export default Login