import { lazy, Suspense } from "react";
import { Loader } from "../../components/loader";
import TasksList from "../../components/tasks-list";
const AddNewTask = lazy(() => import("../../components/add-new-task"));

const DashboardPage = () => {
  return (
    <div className="bg-gray-50 p-8 w-full h-full min-h-screen">
      <div className="flex items-center justify-end">
        <Suspense fallback={<Loader />}></Suspense>
        <AddNewTask />
      </div>
      <TasksList />
    </div>
  );
};

export default DashboardPage;
