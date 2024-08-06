import React, { ChangeEvent, useState } from 'react'
import { Task } from '../types/Task'

interface AddTaskInterface{
    tasks: Task[],
    handleAddTask: (task: Task) => void
}

export const TaskAddItem: React.FC<AddTaskInterface> = ({tasks, handleAddTask}) => {
    const [newTask, setNewTask] = useState<Task>({id: 0, name:'', status: false })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setNewTask(prev => ({ ...prev, [name]: value }))
        console.log(newTask)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setNewTask(prev => ({...prev, id: tasks.length + 1, status: false }))
        console.log(newTask)
        handleAddTask(newTask)
    }

    return (
        <>
            <h2>New Task</h2>
            <form onSubmit={handleSubmit}>
                <label>Task name</label>
                <input type="text" name='name' value={newTask?.name} onChange={handleChange} />
                <input type="submit" value="Add Task" />
            </form>
        </>
    )
}
