import React from "react";
import LoginForm from "../components/signin/SignForm";

const SignIn: React.FC = () => {
  return (
    <div className="w-full min-h-svh px-6 bg-gray-100 font-montserrat flex items-center">
      <LoginForm />
    </div>
  );
};

export default SignIn;
