import { X } from "lucide-react";

interface IModel {
  title: string;
  description: string;
  children: React.ReactNode;
  onClose: () => void;
}

const Model: React.FC<IModel> = ({ title, description, children, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full min-h-screen flex items-center justify-center bg-gray-950/50 z-[9999999999] p-6">
      <div className="relative bg-white w-full max-w-[580px] min-h-[200px] rounded-md shadow-sm p-6">
        <button className="absolute top-4 right-4" onClick={onClose}>
          <X className="w-6 h-6" />
        </button>
        <div className="">
          <h4 className="font-medium text-lg">{title}</h4>
          <p className="text-sm text-gray-500 mt-1">{description}</p>
          <div className="mt-4">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Model;
