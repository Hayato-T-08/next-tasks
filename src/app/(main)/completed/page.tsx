import TaskCard from "@/components/SideMenu/TaskCard/TaskCard";
import { TaskDocument } from "@/models/task";

const getCompletedTasks = async (): Promise<TaskDocument[]> => {
  const response = await fetch(`${process.env.API_URL}/tasks/completed`, {
    cache: "no-store",
  });
  if (response.status !== 200) {
    throw new Error("Failed to fetch tasks");
  }

  const data = await response.json();
  return data.tasks as TaskDocument[];
};

const completedTasksPage = async () => {
  const completedTasks = await getCompletedTasks();
  return (
    <div className="text-gray-800 p-8 h-full overflow-y-auto pb-24">
      <div>
        <header className="flex justify-between items-cneter">
          <h1 className="text2xl font-bold flex items-center">
            Completed Tasks
          </h1>
        </header>
        <div className="mt-8 flex flex-warp gap-4">
          {completedTasks.map((task) => (
            <TaskCard key={task._id} task={task} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default completedTasksPage;
