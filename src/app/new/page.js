"use client"
import { useEffect } from "react"
import { useTasks } from "@/context/TasksContext"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { toast } from "react-hot-toast"

function NewTask({ params }) {
  const router = useRouter()
  const { tasks, createTask, updateTask } = useTasks()
  const { register, handleSubmit, setValue, formState: { errors }} = useForm()

  const onSubmit = handleSubmit((data) => {
    const { title, description } = data
    if(!params.id) {
      createTask(title, description)
      toast.success("Task created successfully")
    } else {
      updateTask(params.id, title, description)
      toast.success("Task updated successfully")
    }
    router.push("/")
  })

  useEffect(() => {
    if(params.id) {
      const taskFound = tasks.find(task => task.id === params.id)
      if(taskFound) {
        setValue("title", taskFound.title)
        setValue("description", taskFound.description)
      }
    }
  }, [])

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>Task:</label>
        <input
          className="text-black"
          placeholder="task #n"
          {...register("title", { required: true })}
        />
        {
          errors.title && (
          <span>This field is required</span>
          )
        }
        <label>Description:</label>
        <input
          className="text-black"
          placeholder="task description #n"
          {...register("description", { required: true })}
        />
        {
          errors.description && (
          <span>This field is required</span>
          )
        }
        <button className="bg-green-500">Add ➕</button>
      </form>
    </div>
  )
}

export default NewTask