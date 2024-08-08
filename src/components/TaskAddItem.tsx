import React, { ChangeEvent, useState } from 'react'
import { Task } from '../types/Task'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'
import { addTask } from '../redux/taskSlice'

export const TaskAddItem: React.FC = () => {
    const tasks = useSelector((state: RootState) => state.tasks)
    const dispatch = useDispatch<AppDispatch>()
    const [newTask, setNewTask] = useState<Omit<Task, 'id'>>({ title: '', completed: false })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setNewTask(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {// e: React.FormEvent can be used too
        e.preventDefault()
        if (newTask.title.trim()) {
            dispatch(addTask(newTask))
            setNewTask(prev => ({ ...prev, title:'' }))
        }
    }

    return (
        <>
            <h2>New Task</h2>
            <form onSubmit={handleSubmit}>
                <label>Task name</label>
                <input type="text" name='title' value={newTask?.title} onChange={handleChange} />
                <input type="submit" value="Add Task" />
            </form>
        </>
    )
}
