"use client"
// this file doesn't uses react-hook-form
import { useEffect, useState } from "react"
import { useTasks } from "@/context/TasksContext"
import { useRouter } from "next/navigation"

function NewTask({ params }) {
  const router = useRouter()
  const { tasks, createTask, updateTask } = useTasks()
  const [ task, setTask ] = useState({
    title: "",
    description: ""
  })

  const handleChange = (e) => {
    setTask(
      {...task, [e.target.name]: e.target.value}
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!params.id) {
      createTask(task.title, task.description)
    } else {
      updateTask(params.id, task.title, task.description)
    }
    router.push("/")
  }

  useEffect(() => {
    if(params.id) {
      const taskFound = tasks.find(task => task.id === params.id)
      if(taskFound) {
        setTask({
          title: taskFound.title,
          description: taskFound.description
        })
      }
    }
  }, [])

  return (
    <div>
      <form onSubmit={handleSubmit}className="">
        <label>Task:</label>
        <input value={task.title} type="text" name="title" className="text-black" onChange={handleChange}/>
        <label>Description:</label>
        <textarea value={task.description} type="text" name="description" className="text-black" onChange={handleChange}/>
        <button className="bg-green-500">Add new task</button>
      </form>
    </div>
  )
}

export default NewTask