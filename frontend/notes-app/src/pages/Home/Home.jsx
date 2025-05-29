import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import NoteCard from '../../components/Cards/NoteCard'
import { MdAdd } from 'react-icons/md'
import AddEditNotes from './AddEditNotes'

const Home = () => {
  return (
    <>
      <Navbar />
      <div className='container mx-auto'>
        <div className='grid grid-cols-3 gap-4 mt-8'>
          <NoteCard
            title="Meeting on 30th May"
            date="30th May 2025"
            content="hey,Meeting on 30th May"
            tags="#Meeting"
            onEdit={() => { }}
            onDelete={() => { }}
          />
        </div>
      </div>

      <button className='w-16 h-16 flex items-center justify-center rounded-2xl bg-blue-500 hover:bg-blue-600 absolute right-10 bottom-10' onClick={() => { }}>
        <MdAdd className='text-[32px] text-white' />
      </button>

      <AddEditNotes/>

    </>
  )
}

export default Home
