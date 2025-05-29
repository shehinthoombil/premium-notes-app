import React from 'react'

const AddEditNotes = () => {
    return (
        <div>
            <div className='flex flex-col gap-2'>
                <label className="input-label">TITLE</label>
                <input
                    type="text"
                    className='text-2xl text-slate-950 outline-none'
                    placeholder='GO TO GYM AT 5'
                />
            </div>

            <div className='flex flex-col gap-2 mt-4'>
                <label className='input-label'>CONTENT</label>
                <textarea
                    type="text"
                    className='text-sm text-shadow-slate-50 outline-none bg-slate-100 p-2 rounded'
                    placeholder='Content'
                    rows={10}
                />
            </div>
        </div>
    )
}

export default AddEditNotes
