import React from "react";
import { TriangleAlert } from "lucide-react";
import { CircleCheckBig } from 'lucide-react';
import { CircleAlert } from 'lucide-react';
const FormMessage = ({ message, type }: { message: string, type: string }) => {
  if (!message) return null;
  if (type === "error") {
    return (
      <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive my-3">
        <TriangleAlert className="h-4 w-4 text-destructive" />
        <p>{message}</p>
      </div>
    );
  }
  if(type === "success"){
    return (
      <div className="bg-emerald-500/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-emerald-500 my-3">
        <CircleCheckBig className="h-4 w-4 text-emerald-500" />
        <p>{message}</p>
      </div>
    );
  }
  if(type === "warning"){
    return (
      <div className="bg-[#f5ee31]/65 p-3 rounded-md flex items-center gap-x-2 text-sm my-3">
        <CircleAlert className="h-4 w-4 text-red-500" />
        <p>{message}</p>
      </div>
    );
  }
};

export default FormMessage;
