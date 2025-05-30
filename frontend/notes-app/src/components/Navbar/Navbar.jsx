import React, { useState } from 'react'
import ProfileInfo from '../../components/Cards/ProfileInfo'
import { useNavigate } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'

const Navbar = ({ userInfo }) => {
  const [searchQuery, SetSearchQuery] = useState("");

  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.clear()
    navigate('/login');
  }

  const handleSearch = () => {

  }
  const onClearSearch = () => {
    SetSearchQuery("");
  }
  return (
    <div className='bg-white flex items-center justify-between px-6 py-2 drop-shadow'>
      <h1 className='text-xl font-medium text-black py-2'>Notes</h1>

      <SearchBar
        value={searchQuery}
        onChange={({ target }) => {
          SetSearchQuery(target.value);
        }}
        handleSearch={handleSearch}
        onClearSearch={onClearSearch}
      />

      <ProfileInfo userInfo={userInfo} onLogout={onLogout} />
    </div>
  )
}

export default Navbar
