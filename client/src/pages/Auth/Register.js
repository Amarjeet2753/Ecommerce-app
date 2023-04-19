import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";

import toast from 'react-hot-toast';
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import "../../styles/authStyles.css"

const Register = () => {
  
    const [name,setName] =useState("");
    const [email,setEmail] =useState("");
    const [password,setPassword] =useState("");
    const [phone,setPhone] =useState("");
    const [address,setAddress] =useState("");
    const [answer,setAnswer] =useState("");
   
    const navigate = useNavigate()
    const handleSubmit = async (e)=>{
      e.preventDefault();
         
     
      try{
        const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`,{name,email,password,phone,address,answer});

        if(res.data.success){

            toast.success(res.data.msg);
            navigate('/login');
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
    <Layout title="Register - ecommerce ">
      <div className="form-container">
        <h1>Register Page</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              className="form-control"
              id="name"
              placeholder="Enter your name"
              required
            />
          </div>
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
            <input
              type="text"
              value={phone}
              onChange={(e)=>setPhone(e.target.value)}
              className="form-control"
              id="phone"
              placeholder="Enter your phone"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={address}
              onChange={(e)=>setAddress(e.target.value)}
              className="form-control"
              id="address"
              placeholder="Enter your address"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={answer}
              onChange={(e)=>setAnswer(e.target.value)}
              className="form-control"
              id="answer"
              placeholder="what is favourite sport ?"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
