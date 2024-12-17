import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface IButtonLoading extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: string;
  isLoading?: boolean;
  loadingLabel: string;
}

export function ButtonLoading({
  className,
  children,
  isLoading,
  loadingLabel,
  ...rest
}: IButtonLoading) {
  return (
    <Button
      disabled={isLoading}
      className={cn("flex items-center justify-center gap-2", className)}
      {...rest}
    >
      {isLoading && <Loader2 className="animate-spin w-4 h-4" />}
      {isLoading ? loadingLabel : children}
    </Button>
  );
}
