import TaskItem from './TaskItem';

const TaskList = ({tasks, toggleTask, enterEditMode, removeTask}) => {
  return (
    <ul className='mt-10 px-2 h-4/6'>
      {
        tasks.map(task => 
          <TaskItem 
            key={task.id} 
            task={task} 
            toggleTask={toggleTask} 
            enterEditMode={enterEditMode}
            removeTask={removeTask}
          />)
      }
    </ul>
  )
}

export default TaskList