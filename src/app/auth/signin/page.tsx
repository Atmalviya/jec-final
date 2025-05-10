import React from 'react'
import { LoginForm } from "@/components/auth/login-form";
import { SignInForm } from "@/components/auth/signin-form";
const page = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
    <SignInForm />
    </div>
  );
}

export default page