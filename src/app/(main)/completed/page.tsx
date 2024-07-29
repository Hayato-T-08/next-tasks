import TaskCard from '@/components/SideMenu/TaskCard/TaskCard'

const completedTasksPage = () => {

    return <div className='text-gray-800 p-8 h-full overflow-y-auto pb-24'>
    <div>
      <header className="flex justify-between items-cneter">
        <h1 className='text2xl font-bold flex items-center'>Completed Tasks</h1>
      </header>
      <div className="mt-8 flex flex-warp gap-4">
        <TaskCard />
      </div>
    </div>
  </div>

}

export default completedTasksPage