import { format } from "date-fns";
import { Pencil, Trash } from "lucide-react";

interface ISingleTaskCard {
  id: String;
  title: string;
  updatedAt: Date;
  description: string;
}

const SingleTaskCard: React.FC<ISingleTaskCard> = ({
  id,
  title,
  updatedAt,
  description,
}) => {
  const markCompleteHandler = () => {
    console.log(id);
  };

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
        <button
          className="w-full mt-4 flex items-center gap-2 font-medium text-sm bg-red-500 text-white py-3 px-6 rounded shadow-sm  transition-all duration-300 ease-in-out hover:bg-red-500/90  text-center justify-center"
          onClick={markCompleteHandler}
        >
          <Trash className="w-4 h-4" /> Delete
        </button>
        <button
          className="w-full mt-4 flex items-center gap-2 font-medium text-sm bg-gray-100 py-3 px-6 rounded shadow-sm text-gray-950 transition-all duration-300 ease-in-out hover:bg-gray-100/90  text-center justify-center"
          onClick={markCompleteHandler}
        >
          <Pencil className="w-4 h-4" /> Edit
        </button>
      </div>
    </div>
  );
};

export default SingleTaskCard;
