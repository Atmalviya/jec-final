// import { cn } from "@/lib/utils"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"

// export function SignupForm({
//   className,
//   ...props
// }: React.ComponentPropsWithoutRef<"form">) {
//   return (
//     <form className={cn("flex flex-col gap-6", className)} {...props}>
//       <div className="flex flex-col items-center gap-2 text-center">
//         <h1 className="text-2xl font-bold">Create an account</h1>
//         <p className="text-balance text-sm text-muted-foreground">
//           Enter your email below to create an account
//         </p>
//       </div>
//       <div className="grid gap-6">
//         <div className="grid gap-2">
//           <Label htmlFor="email">Email</Label>
//           <Input id="email" type="email" placeholder="m@example.com" required />
//         </div>
//         <div className="grid gap-2">
//           <Label htmlFor="enrollment-number">Enrollment Number</Label>
//           <Input id="enrollment-number" type="text" placeholder="0201CS191022" required />
//         </div>
//         <div className="grid gap-2">
//           <div className="flex items-center">
//             <Label htmlFor="password">Password</Label>
//           </div>
//           <Input id="password" type="password" placeholder="********" required />
//           <div className="flex items-center">
//             <Label htmlFor="confirm-password">Confirm Password</Label>
//           </div>
//           <Input id="confirm-password" type="password" placeholder="********" required />
//         </div>
//         <Button type="submit" className="w-full">
//           Create account
//         </Button>
//       </div>
//       <div className="text-center text-sm">
//         Already have an account?{" "}
//         <a href="/auth/signin" className="underline underline-offset-4">
//           Sign in
//         </a>
//       </div>
//     </form>
//   )
// }

"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { SignUpSchema } from "@/schemas";
import FormMessage from "@/components/auth/FormMessage";
import * as z from "zod";
import { signUp } from "@/actions/signUp";
import { Loader2 } from "lucide-react";
import Link from "next/link";

export function SignupForm() {
  const [formData, setFormData] = useState({firstName: '', lastName: '', email:'', userName:'', password:''})
  const [formMessage, setFormMessage] = useState({message: '', type:''});
  const [loading, setloading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setloading(true)
    e.preventDefault();
    setFormMessage({message : "", type : ""});
    try {
      console.log("formData",formData)
      SignUpSchema.parse(formData)
      await signUp(formData)
        .then((data) => {
          setFormMessage({message : data.message, type :data.type});
          setloading(false)
        })
        .catch((error) => {
          if(error instanceof Error){
            setFormMessage({message : error.message, type : "error"});
          }
          else{
            setFormMessage({message : "Something went wrong", type : "error"});
          }
        })
    } catch (err) {
      if (err instanceof z.ZodError) {
        const errorMessages: Record<string, string> = {};
        err.errors.forEach(error => {
          errorMessages[error.path[0]] = error.message;
          console.log(error.message);
          setFormMessage({message : error.message, type : "error"});
        });
        setloading(false)
      }  
    }
  };
  return (
    <div className="shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Training and Placement Office
      </h2>
      <h3 className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Jabalpur Engineering College, Jabalpur M.P.
      </h3>
      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer className="w-full">
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="Tyler" type="text" name="firstName" onChange={handleChange} required />
          </LabelInputContainer>
          <LabelInputContainer className="w-full">
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="Durden" type="text" name="lastName" onChange={handleChange} required/>
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="projectmayhem@fc.com" type="email" name="email" onChange={handleChange} required />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="userName">Enrollment Number</Label>
          <Input id="userName" placeholder="i.e. 0201CS191022" type="text" name="userName" onChange={handleChange} required />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input id="password" placeholder="••••••••" type="password" name="password" onChange={handleChange} required />
        </LabelInputContainer>
            <FormMessage message={formMessage.message} type={formMessage.type} />
        <button
          className="bg-gradient-to-br relative group/btn bg-primary w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] flex items-center justify-center"
          type="submit"
          disabled={loading}
        >
          {loading && (
            <Loader2 className="animate-spin mr-2 h-4 w-4" />
          )}
          Register &rarr;
        </button>
        <p className="my-4 text-sm dark:text-gray-600">
              Already have an account ? 
              <Link
                href="/auth/signin"
                className="hover:underline dark:text-violet-600"
              >{" "}
                Sign In
              </Link>
              .
            </p>
      </form>
    </div>
  );
}



const LabelInputContainer = ({ children, className }: { children: React.ReactNode, className: string }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

