import axios from "axios"
import { Task } from "../types/Task"

export const API_URL = 'http://localhost:3000/todo'

export const getTask = async (): Promise<Task[]> => {
    const result = await axios.get(API_URL)
    return result.data
}

export const createTask = async (todo: Omit<Task, 'id'>): Promise<Task> => {
    const result = await axios.post(API_URL, todo)
    return result.data
}

export const updateTask = async (id: number, todo: Partial<Task>): Promise<Task> => {
    const result = await axios.put(`${API_URL}/${id}`, todo)
    console.log("service:", result.data)
    return result.data
}

export const deleteTask = async (id: number): Promise<Task[]> => {
    const result = await axios.delete(`${API_URL}/${id}`)
    return result.data
}