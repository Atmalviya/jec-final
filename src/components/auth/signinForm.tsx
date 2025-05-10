"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { SignInSchema } from "@/schemas";
import FormMessage from "./FormMessage";
import * as z from "zod";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { signInAction } from "@/actions/signIn";

export function SignInForm() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [formMessage, setFormMessage] = useState({ message: "", type: "" });
  const [loading, setloading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setloading(true);
    setFormMessage({ message: "", type: "" });
    e.preventDefault();
    try {
      console.log("login formData",formData)
      SignInSchema.parse(formData);
      signInAction(formData)
      .then((data) => {
        setFormMessage({
          message: data?.message || "",
          type: data?.type || "",
        });
        setloading(false);
      })
      .catch((error) => {
        if(error instanceof Error){
          setFormMessage({ message: error.message, type: "error" });
        }
        else{
          setFormMessage({ message: "Something went wrong", type: "error" });
        }
        console.log(error);
        setloading(false);
      });
    } catch (err) {
      if (err instanceof z.ZodError) {
        const errorMessages: Record<string, string> = {};
        err.errors.forEach((error) => {
          errorMessages[error.path[0]] = error.message;
          console.log(error.message);
          setFormMessage({ message: error.message, type: "error" });
          setloading(false);
        });
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
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="projectmayhem@fc.com"
            type="text"
            name="email"
            onChange={handleChange}
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            placeholder="••••••••"
            type="password"
            name="password"
            onChange={handleChange}
          />
        </LabelInputContainer>
        <p className="mb-4 text-sm dark:text-gray-600">
          <Link
            href="/auth/reset"
            className="hover:underline dark:text-violet-600"
          >
            Forgot password?
          </Link>
        </p>
        <FormMessage message={formMessage.message} type={formMessage.type} />
        <button
          className="bg-gradient-to-br relative group/btn bg-primary w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] flex items-center justify-center"
          type="submit"
          disabled={loading}
        >
          {loading && <Loader2 className="animate-spin mr-2 h-4 w-4" />}
          Login &rarr;
        </button>
        <p className="my-4 text-sm dark:text-gray-600">
          Dont have an account ?
          <Link
            href="/auth/signup"
            className="hover:underline dark:text-violet-600"
          >
            {" "}
            Sign Up
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
