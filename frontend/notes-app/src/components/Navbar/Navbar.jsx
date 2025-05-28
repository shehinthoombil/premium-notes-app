import React from 'react'
import ProfileInfo from '../../components/Cards/ProfileInfo'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate

  const onLogout = () => {
    navigate('/login');
  }
  return (
    <div className='bg-white flex items-center justify-between px-6 py-2 drop-shadow'>
      <h1 className='text-xl font-medium text-black py-2'>Notes</h1>

      <ProfileInfo onLogout={onLogout} />
    </div>
  )
}

export default Navbar
