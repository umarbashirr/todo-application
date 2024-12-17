import { ButtonLoading } from "@/components/loading-button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import * as z from "zod";
import { axiosInstance } from "../../lib/axios";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name should be minimum 02 characters!" }),
  email: z.string().email({ message: "Enter valid email!" }),
  password: z
    .string()
    .min(6, { message: "Password should be minimum 06 characters!" }),
});

const RegisterForm = () => {
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmitHandler = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await axiosInstance.post("/auth/register", values);

      const data = response.data;

      if (response.status > 299) {
        toast.error(data?.message);
        return;
      }

      toast.success(data?.message);

      setTimeout(() => {
        navigate("/login", {
          replace: true,
        });
      }, 1);
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmitHandler)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your password"
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <ButtonLoading
          className="w-full"
          isLoading={form.formState.isSubmitting}
          loadingLabel="Please wait..."
          type="submit"
        >
          Register Now
        </ButtonLoading>
      </form>
    </Form>
  );
};

export default RegisterForm;
