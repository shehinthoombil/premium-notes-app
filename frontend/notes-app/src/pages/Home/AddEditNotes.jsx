import React, { useState } from 'react'
import TagInput from '../../components/Input/TagInput'
import { MdClose } from 'react-icons/md'

const AddEditNotes = ({ noteData, type, onClose }) => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [tags, setTags] = useState([])
    const [error, setError] = useState(null)

    //Add Note
    const addNewNote = async () => { };

    //Edit Note
    const editNote = async () => { };

    const handleAddNote = () => {
        if (!title) {
            setError("Please Enter the title")
            return;
        }
        if (!content) {
            setError("Please Enter the content")
            return;
        }
        setError("")

        if (type === 'edit') {
            editNote()
        } else {
            addNewNote()
        }
    }

    return (
        <div className='relative'>
            <button className='w-10 h-10 rounded-full flex items-center justify-center absolute -top-3 -right-3 hover:bg-slate-50' onClick={onClose}>
                <MdClose className='text-xl text-slate-400' />
            </button>
            <div className='flex flex-col gap-2'>
                <label className="input-label">TITLE</label>
                <input
                    type="text"
                    className='text-2xl text-slate-950 outline-none'
                    placeholder='GO TO GYM AT 5'
                    value={title}
                    onChange={({ target }) => setTitle(target.value)}
                />
            </div>

            <div className='flex flex-col gap-2 mt-4'>
                <label className='input-label'>CONTENT</label>
                <textarea
                    type="text"
                    className='text-sm text-shadow-slate-50 outline-none bg-slate-100 p-2 rounded'
                    placeholder='Content'
                    rows={10}
                    value={content}
                    onChange={({ target }) => setContent(target.value)}
                />
            </div>

            <div className='mt-3'>
                <label className='input-label'>TAGS</label>
                <TagInput tags={tags} setTags={setTags} />
            </div>
            {error && <p className='text-red-500 text-xs pt-4'>{error}</p>}

            <button className='w-full text-sm text-white rounded my-1 hover:bg-blue-600 bg-[#2B85FF] font-medium mt-5 p-3'
                onClick={handleAddNote}>ADD</button>
        </div>
    )
}

export default AddEditNotes
