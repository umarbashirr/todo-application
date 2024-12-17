import { Pencil } from "lucide-react";
import { useState } from "react";
import Model from "./model";
import TodoForm from "./todo-form";
import { Button } from "./ui/button";

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
      <Button
        className="flex items-center justify-center w-full"
        onClick={() => setOpen(true)}
      >
        <Pencil className="w-4 h-4" /> Edit
      </Button>
      {open && (
        <Model
          title="Edit Task"
          description="Fill out the below form in order to update your  task."
          onClose={() => setOpen(false)}
          isOpen={open}
        >
          <TodoForm isEditing={true} initialData={task} />
        </Model>
      )}
    </>
  );
};

export default EditTask;
