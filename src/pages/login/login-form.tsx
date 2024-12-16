import { useState } from "react";
import Button from "../../components/button";
import { ArrowRight } from "lucide-react";

const LoginForm = () => {
  const [values, setValues] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(values);
  };

  return (
    <form onSubmit={onSubmitHandler} className="space-y-4">
      <div className="w-full flex flex-col gap-2">
        <label htmlFor="email" className="font-medium text-sm">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          className="focus:outline-gray-900 border rounded p-2 text-sm"
          required
          value={values?.email}
          onChange={(e) => setValues({ ...values, email: e.target.value })}
        />
      </div>
      <div className="w-full flex flex-col gap-2">
        <label htmlFor="password" className="font-medium text-sm">
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="Enter your password"
          className="focus:outline-gray-900 border rounded p-2 text-sm"
          required
          value={values?.password}
          onChange={(e) => setValues({ ...values, password: e.target.value })}
        />
      </div>
      <Button className="w-full" type="submit">
        Login now <ArrowRight className="w-4 h-4" />
      </Button>
    </form>
  );
};

export default LoginForm;
