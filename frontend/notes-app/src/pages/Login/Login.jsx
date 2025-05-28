import React from 'react'
import Navbar from '../../components/Navbar'
import { Link } from 'react-router-dom'
import PasswordInput from '../../components/Input/PasswordInput'

const Login = () => {
  return (
    <>
      <Navbar />

      <div className='flex items-center justify-center mt-28'>
        <div className='w-96 border rounded bg-white px-7 py-18'>
          <form onSubmit={() => { }}>
            <h4 className='text-2xl mb-7'>Login</h4>
            <input type='text' placeholder='Email' className='input-box'></input>

            <PasswordInput/>
            <button type='submit' className='bg-[#2B85FF] px-4 py-2 w-full text-sm text-white p-2 rounded my-1 hover:bg-blue-600'>Login</button>
            <p className='text-sm text-center mt-4'>Not registered yet?{" "}
              <Link to="/register" className='font-medium  text-[#2B85FF] underline'> Create an Account </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
