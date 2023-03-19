import { useState } from 'react';

import { PlusIcon } from '@heroicons/react/24/solid'

const CustomForm = ({addTask}) => {
  const [task, setTask] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addTask({
      name: task,
      checked: false,
      id: Date.now()
    });
    setTask("");
  }

  return (
    <div className="text-2xl">
      <form className=" flex items-center justify-center" onSubmit={handleFormSubmit}>
        <div className="flex items-center justify-center border-2 border-blue-600 px-2 mx-4 w-full">
          <input 
            className="outline-none text-base py-2 w-full text-slate-700"
            type="text" 
            name="task" 
            id="task" 
            value={task} 
            onInput={(e) => setTask(e.target.value)}
            required
            autoFocus
            maxLength={60}
            placeholder="Enter Task"
          />
          <button type="submit" className='bg-blue-500'>
            <PlusIcon className="w-8 h-8 text-white"/>
          </button>
        </div>
      </form>
    </div>
  )
}

export default CustomForm