import { format } from "date-fns";
import { Trash } from "lucide-react";
import EditTask from "./edit-task";

interface ISingleTaskCard {
  id: string;
  title: string;
  updatedAt: Date;
  description: string;
  isCompleted: boolean;
}

const SingleTaskCard: React.FC<ISingleTaskCard> = ({
  id,
  title,
  updatedAt,
  description,
  isCompleted,
}) => {
  return (
    <div className="shadow-md bg-white p-6 flex flex-col rounded-md">
      <h3 className="text-lg font-medium">{title}</h3>
      <h4 className="text-xs mt-1">
        Last updated on {format(updatedAt, "dd MMM yyyy")}
      </h4>
      <p className="text-gray-500 leading-normal mt-4 flex-grow">
        {description}
      </p>
      <div className="w-full flex items-center justify-between gap-4">
        <button className="w-full mt-4 flex items-center gap-2 font-medium text-sm bg-red-500 text-white py-3 px-6 rounded shadow-sm  transition-all duration-300 ease-in-out hover:bg-red-500/90  text-center justify-center">
          <Trash className="w-4 h-4" /> Delete
        </button>
        <EditTask task={{ id, title, description, isCompleted }} />
      </div>
    </div>
  );
};

export default SingleTaskCard;
