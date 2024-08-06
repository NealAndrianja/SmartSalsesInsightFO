import { useEffect, useState } from 'react'
import './App.css'
import { TaskList } from './components/TaskList'
import { Task } from './types/Task'
import { TaskAddItem } from './components/TaskAddItem'

function App() {
  const [taskList, setTaskList] = useState<Task[]>([
    { id: 1, name: 'Task 1', status: false },
    { id: 2, name: 'Task 2', status: false },
    { id: 3, name: 'Task 3', status: false },
  ])

  useEffect(() => {
    console.table(taskList)
  

  }, [taskList])
  

  const toggleTask = (taskId: number) => {
    setTaskList(taskList.map(task => task.id === taskId ? { ...task, status: !task.status } : task))
  }

  const deleteTask = (taskId: number) => {
    setTaskList(taskList.filter(task => task.id !== taskId))
  }

  const handleAddTask = (task: Task) => {
    setTaskList(prev => ([...prev, task]))
  }

  return (
    <>
      <h1>Todo List</h1>
      <TaskAddItem tasks={taskList} handleAddTask={handleAddTask}/>
      <TaskList tasks={taskList} toogleTask={toggleTask} deleteTask={deleteTask} />
    </>
  )
}

export default App
