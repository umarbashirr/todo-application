import { useEffect, useState } from "react";
import SingleTaskCard from "./single-task-card";
import { axiosInstance } from "@/lib/axios";

const TasksList = () => {
  const [tasks, setTasks] = useState<any>([]);

  const fetchTasks = async () => {
    try {
      const response = await axiosInstance.get("/tasks");

      const data = response.data;

      setTasks(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="mt-10 w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {tasks.map((task: any) => (
        <SingleTaskCard
          isCompleted={task.isCompleted}
          key={task.id}
          id={task.id}
          title={task.title}
          description={task.description}
          updatedAt={task.updatedAt}
        />
      ))}
    </div>
  );
};

export default TasksList;
