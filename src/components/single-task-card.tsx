import { format } from "date-fns";
import { Trash } from "lucide-react";
import EditTask from "./edit-task";
import { Button } from "./ui/button";

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
      <p className="text-muted-foreground mt-4 flex-grow">{description}</p>
      <div className="w-full flex items-center justify-between gap-4 mt-4">
        <Button
          variant="destructive"
          className="flex items-center justify-center w-full"
        >
          <Trash className="w-4 h-4" /> Delete
        </Button>
        <EditTask task={{ id, title, description, isCompleted }} />
      </div>
    </div>
  );
};

export default SingleTaskCard;
