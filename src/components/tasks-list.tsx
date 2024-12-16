import { useState } from "react";
import SingleTaskCard from "./single-task-card";

const taskData = [
  {
    id: "1",
    title: "Design Homepage",
    updatedAt: new Date("2024-12-10T14:30:00"),
    description:
      "Complete the initial wireframe and high-fidelity design for the homepage.",
  },
  {
    id: "2",
    title: "Setup Backend API",
    updatedAt: new Date("2024-12-12T10:15:00"),
    description:
      "Develop and deploy the RESTful API for user authentication and data storage.",
  },
  {
    id: "3",
    title: "Create Marketing Plan",
    updatedAt: new Date("2024-12-14T08:00:00"),
    description:
      "Draft a marketing strategy to promote the new product launch in Q1 2025.",
  },
  {
    id: "4",
    title: "Fix Login Bug",
    updatedAt: new Date("2024-12-15T16:45:00"),
    description:
      "Resolve the issue causing intermittent login failures for users.",
  },
];

const TasksList = () => {
  const [tasks, setTasks] = useState(taskData);
  return (
    <div className="mt-10 w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {tasks.map((task) => (
        <SingleTaskCard
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
