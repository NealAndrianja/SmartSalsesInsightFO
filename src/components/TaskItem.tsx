import React from 'react'
import { Task } from '../types/Task'

interface TaskItemProps {
  task: Task,
  toogleTask: (taskId: number) => void,
  deleteTask: (taskId: number) => void,
}

export const TaskItem: React.FC<TaskItemProps> = ({ task, toogleTask, deleteTask }) => {
  return (
    <div>
      <input type="checkbox" checked={task.status} onChange={()=>toogleTask(task.id)}/>
      <span style={{'textDecoration': task.status ? 'line-through' : 'none'}}>{task.name}</span>  
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  )
}
