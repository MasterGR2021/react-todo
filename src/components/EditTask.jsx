import { useState, useEffect } from 'react';

import { CheckIcon } from "@heroicons/react/24/solid"

const EditTask = ({ editiedTask, updateTask, closeEditMode }) => {
  const [updatedTaskName, setUpdatedTaskName] = useState(editiedTask.name);

  useEffect(() => {
    const closeModal = (e) => {
      e.key === "Escape" && closeEditMode();
    }

    window.addEventListener('keydown', closeModal);

    return () => {
      window.removeEventListener('keydown', closeModal);      
    } 
  }, [closeEditMode])

  const handleFormSubmit = (e) => {
    e.preventDefault();
    updateTask({...editiedTask, name: updatedTaskName});
    closeEditMode();
  }

  return (
    <div>
      <div onClick={closeEditMode} className="w-full h-screen fixed left-0 top-0 bg-blue-400/80">
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 w-full md:max-w-2xl">
        <form className="flex items-center justify-center" 
          onSubmit={handleFormSubmit}
        >
          <div className="bg-white flex items-center justify-center border-2 border-blue-600 px-2 mx-4 w-full">
            <input 
              className="outline-none text-base py-2 w-full text-slate-700"
              type="text" 
              name="task" 
              id="task" 
              value={updatedTaskName} 
              onInput={(e) => setUpdatedTaskName(e.target.value)}
              required
              autoFocus
              maxLength={60}
              placeholder="Enter Updated Task"
            />
            <button type="submit" className='bg-blue-500'>
              <CheckIcon className="w-8 h-8 text-white"/>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditTask