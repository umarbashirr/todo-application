import { PlusCircle } from "lucide-react";
import { useState } from "react";
import Model from "./model";
import TodoForm from "./todo-form";
import { Button } from "./ui/button";

const AddNewTask = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        type="button"
        className="flex items-center justify-center"
      >
        <PlusCircle className="w-4 h-4" /> Add New Task
      </Button>
      {open && (
        <Model
          title="Add New Task"
          description="Fill out the below form in order to create your new task."
          isOpen={open}
          onClose={() => setOpen(false)}
        >
          <TodoForm />
        </Model>
      )}
    </>
  );
};

export default AddNewTask;
