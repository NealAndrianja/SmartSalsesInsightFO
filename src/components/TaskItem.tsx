import React from 'react'
import { Task } from '../types/Task'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../redux/store'
import { deleteTask, toggleTask } from '../redux/taskSlice'

interface TaskItemProps {
  task: Task,
}

export const TaskItem: React.FC<TaskItemProps>= ({ task }) => {
  const dispatch = useDispatch<AppDispatch>()
  return (
    <div>
      <input type="checkbox" checked={task.status} onChange={() => dispatch(toggleTask(task.id))}/>
      <span style={{'textDecoration': task.status ? 'line-through' : 'none'}}>{task.name}</span>  
      <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
    </div>
  )
}
