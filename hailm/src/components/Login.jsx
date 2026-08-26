import React from 'react'
import '../index.css'


const Login = ({setToggle}) => {
  
    return (
      <div className='bg-white w-120 p-5.5 rounded-2xl '>
        <form className='flex flex-col justify-center gap-5.5' action="">
          <h1>Login</h1>
          <input className='p-2 border border-black rounded' placeholder='email' type='text'></input>
          <input className='p-2 border  border-black rounded'   type='text'  placeholder='password'></input>
          <button className='p-2 border bg-blue-600  rounded-4xl text-white '>Login</button>
        </form>
        <p>if you don't have an account? <span onClick={() => setToggle(false)} className='text-blue-500 cursor-pointer'>Register here</span></p>
      </div>
    )
  }


export default Login
