import React from "react";
import LoginForm from "../components/signin/SignForm";

const SignIn: React.FC = () => {
  return (
    <div className="w-full min-h-svh font-montserrat flex items-center">
      <LoginForm />
    </div>
  );
};

export default SignIn;
