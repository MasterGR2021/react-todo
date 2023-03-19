import { useState } from 'react'
import CustomForm from './components/CustomForm'
import TaskList from './components/TaskList';
import EditTask from './components/EditTask';

function App() {
  const [tasks, setTasks] = useState([]);

  const [editingMode, setEditingMode] = useState(false);
  const [editiedTask, setEditiedTask] = useState(null);

  const addTaskHandler = (task) => {
    // console.log(task);
    setTasks(prevState => [...prevState, task]);
  }

  const toggleTaskHandler = (id) => {
    setTasks(prevState => prevState.map(t => (t.id === id ? {...t, checked: !t.checked} : t)))
  }

  const updateTaskHandler = (task) => {
    console.log('updating task...');
    console.log(task);
    setTasks(prevState => prevState.map(t => (
      t.id === task.id ? {...t, name: task.name} : t
    )))

  }

  const enterEditModeHandler = (task) => {
    setEditiedTask(task);
    setEditingMode(true);
  }

  const closeEditModeHandler = (task) => {
    setEditingMode(false);
  }


  const removeTaskHandler = (id) => {
    // console.log(id);
    setTasks(prevState => prevState.filter(t => t.id !== id));
  }

  return (
    <div className='container mx-auto'>
      <header>
        <h1 className='text-center text-2xl font-bold p-4 py-10 text-blue-500'>TASK LIST</h1>
      </header>
      {
        editingMode && <EditTask editiedTask={editiedTask} updateTask={updateTaskHandler} closeEditMode={closeEditModeHandler}/>
      }
      <main className='mx-auto flex flex-col max-w-2xl'>
        <CustomForm addTask={addTaskHandler}/>
        {
          tasks && 
          <TaskList 
            tasks={tasks} 
            toggleTask={toggleTaskHandler} 
            enterEditMode={enterEditModeHandler}
            removeTask={removeTaskHandler}/>
        }
      </main>
    </div>
  )
}

export default App
