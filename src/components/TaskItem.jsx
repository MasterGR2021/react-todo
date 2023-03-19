import { useState } from "react";

import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";

const TaskItem = ({task, toggleTask, enterEditMode, removeTask}) => {
  const [isChecked, setIsChecked] = useState(task.checked);

  const handleCheckChange = () => {
    setIsChecked(prevState => !prevState);
    toggleTask(task.id);
  }

  return (
    <li className="rounded-sm flex justify-between bg-blue-100 my-2 p-4 text-blue-800 text-base">
      {/* {task.name} */}
      <div className="flex justify-between items-center">
        <input 
          type="checkbox" 
          onChange={handleCheckChange}
          checked={isChecked}
          name={task.name}
          id={task.id}
        />
        <label htmlFor={task.id} className={`ml-2 ${isChecked ? 'line-through text-blue-300' : ''}`}>
          {task.name}
        </label>
      </div>
      <div>
        <button 
          aria-label={`update ${task.name} task`}
          onClick={() => enterEditMode(task)}
        >
          <PencilSquareIcon className="w-5 h-5"/>
        </button>
        <button 
          className="ml-8 bg-red-400 p-2 rounded-sm"
          aria-label={`Delete ${task.name} task`}
          onClick={() => removeTask(task.id)}
        >
          <TrashIcon className="w-5 h-5 text-white"/>
        </button>
      </div>
    </li>
  )
}

export default TaskItem