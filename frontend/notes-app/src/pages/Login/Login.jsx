import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Link } from 'react-router-dom'
import PasswordInput from '../../components/Input/PasswordInput'
import { validateEmail } from '../../utils/helper'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email address")
      return;
    }
    if (!password) {
      setError("Please enter  the password")
      return;
    }

    setError("")

    //login API call
    try {
      
    } catch (error) {
      //handle login error
    }
  }
  return (
    <>
      <Navbar />

      <div className='flex items-center justify-center mt-28'>
        <div className='w-96 border rounded bg-white px-7 py-18'>
          <form onSubmit={handleLogin}>
            <h4 className='text-2xl mb-7'>Login</h4>
            <input
              type='text'
              placeholder='Email'
              className='input-box'
              value={email}
              onChange={(e) => setEmail(e.target.value)}></input>


            <PasswordInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && <p className='text-red-500 text-xs pb-1'>{error}</p>}

            <button type='submit' className='bg-[#2B85FF] px-4 py-2 w-full text-sm text-white p-2 rounded my-1 hover:bg-blue-600'>Login</button>
            <p className='text-sm text-center mt-4'>Not registered yet?{""}
              <Link to="/register" className='font-medium  text-[#2B85FF] underline'> Create an Account </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
