import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Task } from '../types/Task'
import { TaskState } from '../types/TaskState'
import { createTask, deleteTask, getTask, updateTask } from '../services/task.service'

const initialState: TaskState = {
    tasks: [],
    loading: false,
    error: undefined,
}

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
    const tasks = await getTask()
    return tasks
})

export const addTask = createAsyncThunk('tasks/addTask', async (todo: Omit<Task, 'id'>) => {
    const task = await createTask(todo)
    return task
})

export const modifyTask = createAsyncThunk('tasks/modifyTask', async ({id, todo}:{id: number, todo: Partial<Task>}) => {
    const task = await updateTask(id, todo)
    console.log('Object.keys(todo)[0]: ', Object.keys(todo)[0])
    console.log("thunk: ", task)
    return task
})

export const removetask = createAsyncThunk('tasks/removeTask', async (id: number) => {
    const tasks = await deleteTask(id)
    return tasks
})

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTasks.pending, (state) => {
                state.loading = true,
                    state.error = undefined
            })
            .addCase(fetchTasks.fulfilled, (state, action: PayloadAction<Task[]>) => {
                state.loading = false,
                    state.error = undefined,
                    state.tasks = action.payload
            })
            .addCase(fetchTasks.rejected, (state, action) => {
                state.loading = false,
                state.error = action.error.message
            })
            .addCase(addTask.fulfilled, (state, action: PayloadAction<Task>) => {
                state.tasks.push(action.payload)
            })
            .addCase(modifyTask.fulfilled, (state, action: PayloadAction<Task>) => {
                const index = state.tasks.findIndex(task => task.id === action.payload.id);
                if (index !== -1) {
                    state.tasks[index] = action.payload;
                }
            })
            .addCase(removetask.fulfilled, (state, action: PayloadAction<Task[]>) => {
                state.tasks = action.payload
            })
    }

})


export default taskSlice.reducer