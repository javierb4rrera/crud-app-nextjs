import { useRouter } from 'next/navigation'
import { useTasks } from '@/context/TasksContext'
import { toast } from 'react-hot-toast'

function TaskCard({task}) {
  const { deleteTask } = useTasks()
  const router = useRouter()

  const handleClickDelete = (e) => {
    e.stopPropagation()
    // const confirm = window.confirm("Are you sure you want to delete this task?")
    // if(confirm) deleteTask(task.id)
    deleteTask(task.id)
    toast.success("Task deleted successfully")
  }

  return (
    <div
      key={task.id}
      className="bg-[#393e49] rounded-lg py-4 px-6 hover:cursor-pointer"
      onClick={() => {
        router.push(`/edit/${task.id}`)
      }}
    >
      <h2 className="font-extrabold text-lg text-[#f6f7f9] text-left">{task.title}</h2>
      <p className="text-[#ebecf0] my-3 first-letter:capitalize">
        {task.description}
      </p>
      <div className="flex justify-center my-2">
      <button onClick={handleClickDelete} className="bg-red-600 font-semibold py-1 w-32 rounded-lg">
        Delete 🗑
      </button>
      </div>
    </div>
  )
}

export default TaskCard