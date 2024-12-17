import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";

interface ITodoForm {
  initialData?: {
    id: string;
    title: string;
    description: string;
    isCompleted: boolean;
  };
  isEditing?: boolean;
}

const formSchema = z.object({
  title: z
    .string()
    .min(2, { message: "Title should be minimum 02 characters!" }),
  description: z
    .string()
    .min(2, { message: "Description should be minimum 02 characters!" }),
});

const TodoForm: React.FC<ITodoForm> = ({ isEditing = false, initialData }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: isEditing && initialData ? initialData.title : "",
      description: isEditing && initialData ? initialData.description : "",
    },
  });
  const onSubmitHandler = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };
  return (
    <Form {...form}>
      <form
        className="space-y-4 w-full"
        onSubmit={form.handleSubmit(onSubmitHandler)}
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Enter title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="Enter your description"
                  rows={8}
                  className="resize-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="mt-2">
          {isEditing ? "Update now" : "Create now"}
        </Button>
      </form>
    </Form>
  );
};

export default TodoForm;
