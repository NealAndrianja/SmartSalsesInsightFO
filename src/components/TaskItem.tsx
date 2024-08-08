import React, { ChangeEvent, useState } from 'react'
import { Task } from '../types/Task'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../redux/store'
import { modifyTask, removetask } from '../redux/taskSlice'

interface TaskItemProps {
  task: Task,
}


export const TaskItem: React.FC<TaskItemProps>= ({ task }) => {
  const dispatch = useDispatch<AppDispatch>()
  const [todo, setTodo] = useState<Partial<Task>>(task)

  const handlechange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    const updatedTodo = { [name]: checked };
    setTodo(updatedTodo);
    dispatch(modifyTask({ id: task.id, todo: updatedTodo }));
  }

  const handleDelete = () => {
    dispatch(removetask(task.id))
  }

  return (
    <div>
      <input type="checkbox" name='completed' checked={todo.completed} onChange={handlechange}/>
      <span style={{'textDecoration': todo.completed ? 'line-through' : 'none'}}>{task.title}</span>  
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}
