"use client"
import TaskCard from "@/components/TaskCard"
import { useTasks } from "@/context/TasksContext"

export default function Home() {
  const { tasks } = useTasks()
  return (
    <main className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-[660px] gap-3">
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id}/>
      ))}
    </main>
  )
}
