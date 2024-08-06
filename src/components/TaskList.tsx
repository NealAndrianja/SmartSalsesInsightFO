import React from 'react'
import { Task } from '../types/Task'
import { TaskItem } from './TaskItem'

interface TaskListProps {
    tasks: Task[],
    toogleTask: (taskId: number) => void,
    deleteTask: (taskId: number) => void,
}

export const TaskList: React.FC<TaskListProps> = ({ tasks, toogleTask, deleteTask }) => {
    return (
        <>
            {tasks.map((task, id) => <TaskItem key={id} task={task} toogleTask={toogleTask} deleteTask={deleteTask} />)}
        </>
    )
}
