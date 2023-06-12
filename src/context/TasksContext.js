"use client"
import { createContext, useContext,useState } from "react"
import { v4 as uuid } from "uuid"
import { useLocalStorage } from "@/hooks/useLocalStorage"

export const TasksContext = createContext()

// hook
export const useTasks = () => {
  const context = useContext(TasksContext)
  if(!context) throw new Error("useTasks must be used within a TasksProvider")
  return context
}

export const TasksProvider = ({children}) => {
  // const [tasksState, setTasks] = useState([])
  const [tasksState, setTasks] = useLocalStorage('tasks', [])

  const createTask = (title, description) => {
    // se agrega una nueva tarea al array de tareas
    setTasks([...tasksState, 
      {
        id: uuid(),
        title: title,
        description: description
      }
    ])
  }

  const deleteTask = (id) => {
    // se filtra el array de tareas para eliminar la tarea con el id dado
    setTasks([...tasksState.filter(task => task.id !== id)])
  }

  const updateTask = (id, title, description) => {
    setTasks([
      ...tasksState.map(
        task => task.id === id ? {id, title, description} : task
      )
    ])
  }

  return (
    <TasksContext.Provider
      value={{
        tasks: tasksState,
        createTask: createTask,
        deleteTask: deleteTask,
        updateTask: updateTask
      }}
    >
      {children}
    </TasksContext.Provider>
  )
}
