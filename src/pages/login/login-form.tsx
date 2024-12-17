import * as z from "zod";
import { ButtonLoading } from "../../components/loading-button";
import { axiosInstance } from "../../lib/axios";
import { toast } from "sonner";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  email: z.string().email({ message: "Enter valid email!" }),
  password: z
    .string()
    .min(6, { message: "Password should be minimum 06 characters!" }),
});

const LoginForm = () => {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmitHandler = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await axiosInstance.post("/auth/login", values);

      const data = response.data;

      if (response.status > 299) {
        toast.error(data?.message);
        return;
      }

      toast.success(data?.message);

      localStorage.setItem("app-token", JSON.stringify(data?.token));

      setTimeout(() => {
        navigate("/dashboard", {
          replace: true,
        });
      }, 1);
    } catch (error: any) {
      toast.error(error.response?.data?.message);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmitHandler)} className="space-y-4">
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
          type="submit"
          isLoading={form.formState.isSubmitting}
          loadingLabel="Please wait..."
        >
          Login Now
        </ButtonLoading>
      </form>
    </Form>
  );
};

export default LoginForm;
