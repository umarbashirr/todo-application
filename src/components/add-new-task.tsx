import { PlusCircle } from "lucide-react";
import { useState } from "react";
import Button from "./button";
import Model from "./model";
import TodoForm from "./todo-form";

const AddNewTask = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)} type="button">
        <PlusCircle className="w-4 h-4" /> Add New Task
      </Button>
      {open && (
        <Model
          title="Add New Task"
          description="Fill out the below form in order to create your new task."
          onClose={() => setOpen(false)}
        >
          <TodoForm />
        </Model>
      )}
    </>
  );
};

export default AddNewTask;
