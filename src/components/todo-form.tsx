import { useState } from "react";
import Button from "./button";

const TodoForm = () => {
  const [values, setValues] = useState({
    title: "",
    description: "",
  });
  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(values);
  };
  return (
    <form className="space-y-4 w-full" onSubmit={onSubmitHandler}>
      <div className="w-full flex flex-col gap-2">
        <label htmlFor="title" className="font-medium text-sm">
          Title
        </label>
        <input
          id="title"
          type="text"
          placeholder="Enter your title"
          className="focus:outline-gray-900 border rounded p-2 text-sm"
          required
          onChange={(e) => setValues({ ...values, title: e.target.value })}
        />
      </div>
      <div className="w-full flex flex-col gap-2">
        <label htmlFor="description" className="font-medium text-sm">
          Description
        </label>
        <textarea
          id="description"
          placeholder="Enter your description"
          className="focus:outline-gray-900 border rounded p-2 text-sm resize-none"
          required
          rows={5}
          onChange={(e) =>
            setValues({ ...values, description: e.target.value })
          }
        />
        <Button type="submit" className="mt-2">
          Create now
        </Button>
      </div>
    </form>
  );
};

export default TodoForm;
