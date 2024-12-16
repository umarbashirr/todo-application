import { Link } from "react-router";
import RegisterForm from "./register-form";

const RegisterPage = () => {
  return (
    <div className="w-full h-full min-h-screen p-6 flex items-center justify-center">
      <div className="w-full max-w-[400px] border p-6 rounded-xl shadow-sm">
        <div className="mb-4">
          <h1 className="font-medium text-lg">Create your account</h1>
          <p className="text-sm text-gray-500 mt-1">
            Fill out the below form in order to get started
          </p>
        </div>
        <RegisterForm />
        <p className="mt-4 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-500 font-medium">
            Login now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
