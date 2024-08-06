import React from 'react'
import { TaskItem } from './TaskItem'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'


export const TaskList: React.FC = () => {
    const tasks = useSelector((state: RootState) => state.tasks)
    console.log(tasks)
    return (
        <>
            {tasks.map((task, id) => <TaskItem key={id} task={task} />)}
        </>
    )
}
