import { Link, useNavigate } from "react-router";
import LoginForm from "./login-form";
import { useEffect, useState } from "react";

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [token, setToken] = useState<string | null>(null);
  const navigate = useNavigate();

  const getToken = () => {
    // Retrieve the token from localStorage
    const data = localStorage.getItem("app-token");

    if (!data) {
      setIsLoading(false);
      return;
    }

    const parsed = JSON.parse(data);

    if (parsed && Object.keys(parsed).length > 0) {
      navigate("/dashboard", { replace: true });
    } else {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  return (
    <div className="w-full h-full min-h-screen p-6 flex items-center justify-center">
      <div className="w-full max-w-[400px] border p-6 rounded-xl shadow-sm">
        <div className="mb-4">
          <h1 className="font-medium text-lg">Login to your account</h1>
          <p className="text-sm text-gray-500 mt-1">
            Welcome back! We are happy to see you again
          </p>
        </div>
        <LoginForm />
        <p className="mt-4 text-center text-sm text-gray-500">
          Don&lsquo;t have an account?{" "}
          <Link to="/register" className="text-indigo-500 font-medium">
            Create now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
