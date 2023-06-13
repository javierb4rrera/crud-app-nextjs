import { useRouter } from "next/navigation"

function NoTasks() {
  const router = useRouter()
  return (
    <div
      className=" w-full h-[250px] sm:h-[360px] rounded-xl border-dashed border-gray-600 border-8 flex justify-center items-center cursor-pointer"
      onClick={() => router.push("/new")}
    >
      <p className="text-lg font-semibold">
        No tasks yet, add one!
      </p>
    </div>
  )
}

export default NoTasks