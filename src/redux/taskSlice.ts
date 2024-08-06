import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Task } from '../types/Task'

const initialState: Task[] = [
    { id: 1, name: 'Task 1', status: false },
    { id: 2, name: 'Task 2', status: false },
    { id: 3, name: 'Task 3', status: false },
]

const taskSlice = createSlice({
    name : 'tasks',
    initialState,
    reducers:{
        addTask: (state, action: PayloadAction<Task>) => {
            return [...state, action.payload]
        },
        deleteTask: (state, action: PayloadAction<number>) => {
            return state.filter(task => task.id!== action.payload)
        },
        toggleTask: (state, action: PayloadAction<number>) => {
            return state.map(task => task.id === action.payload? {...task, status:!task.status } : task)
        }
    }

})

export const { addTask, deleteTask, toggleTask } = taskSlice.actions

export default taskSlice.reducer