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
    <div className="bg-gray-700 m-4 py-4 px-7 rounded-xl">
      <form onSubmit={onSubmit} className="flex flex-col gap-y-2">
        <label className="text-xl">Task:</label>
        <input
          className="text-black p-1 rounded"
          placeholder="Task title"
          {...register("title", { required: true })}
        />
        {
          errors.title && (<span className="text-red-400 font-semibold">This field is required</span>
          )
        }
        <label className="text-xl">Description:</label>
        <textarea
          maxLength={180}
          rows="5"
          className="text-black p-1 rounded resize-none"
          placeholder="Task description"
          {...register("description", { required: true })}
        />
        {
          errors.description && (
          <span className="text-red-400 font-semibold">This field is required</span>
          )
        }
        <div className="flex justify-center my-2">
          {params.id ? (
            <button className="bg-blue-500 w-36 py-2 font-bold rounded text-xl hover:bg-blue-600">Update</button>
          ) : (
            <button className="bg-blue-500 w-36 py-2 font-bold rounded text-xl hover:bg-blue-600">Add</button>
          )}
          
        </div>
      </form>
    </div>
  )
}

export default NewTask