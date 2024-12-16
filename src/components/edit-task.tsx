import { Pencil } from "lucide-react";
import { useState } from "react";
import Model from "./model";
import TodoForm from "./todo-form";

interface IEditTask {
  task: {
    id: string;
    title: string;
    description: string;
    isCompleted: boolean;
  };
}

const EditTask: React.FC<IEditTask> = ({ task }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="w-full mt-4 flex items-center gap-2 font-medium text-sm bg-gray-100 py-3 px-6 rounded shadow-sm text-gray-950 transition-all duration-300 ease-in-out hover:bg-gray-100/90  text-center justify-center"
        onClick={() => setOpen(true)}
      >
        <Pencil className="w-4 h-4" /> Edit
      </button>
      {open && (
        <Model
          title="Edit Task"
          description="Fill out the below form in order to update your  task."
          onClose={() => setOpen(false)}
        >
          <TodoForm isEditing={true} initialData={task} />
        </Model>
      )}
    </>
  );
};

export default EditTask;
