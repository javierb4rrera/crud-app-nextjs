import { useRouter } from 'next/navigation'
import { useTasks } from '@/context/TasksContext'

function TaskCard({task}) {
  const { deleteTask } = useTasks()
  const router = useRouter()

  const handleClickDelete = (e) => {
    e.stopPropagation()
    // const confirm = window.confirm("Are you sure you want to delete this task?")
    // if(confirm) deleteTask(task.id)
    deleteTask(task.id)
  }

  return (
    <div
      key={task.id}
      className="bg-white rounded-lg p-2 hover:cursor-pointer"
      onClick={() => {
        router.push(`/edit/${task.id}`)
      }}
    >
      <h2 className="font-extrabold text-lg text-sky-500">{task.title}</h2>
      <p className="text-black my-1">
        {task.description}
      </p>
      <button onClick={handleClickDelete} className="bg-red-600 py-1 w-full rounded-lg">
        Delete 🗑
      </button>
    </div>
  )
}

export default TaskCard