import { cn } from "../lib/utils";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<IButton> = ({ children, className, ...rest }) => {
  return (
    <button
      className={cn(
        "flex items-center justify-center gap-2 font-medium text-sm bg-gray-900 py-3 px-6 rounded shadow-sm text-white transition-all duration-300 ease-in-out hover:bg-gray-950 text-center",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
