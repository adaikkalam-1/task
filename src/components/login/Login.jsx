import React from 'react'
import "./login.css";
const Login = () => {
    const  handleLogin=()=>{
        window.location="/";
     
         };
  return (
    <div className='Container'>
    <div className='Container_fluid'>
    <h2>Thank You</h2>
    <button type='submit' className='btn' onClick={handleLogin} >
        Go Back
    </button>
    </div>
</div>
  )
}

export default Login
