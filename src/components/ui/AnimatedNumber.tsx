"use client";
import { cn } from "@/lib/utils";
import { motion, SpringOptions, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export function AnimatedNumber({ value, className, springOptions }: { value: number, className: string, springOptions: SpringOptions }) {
  const spring = useSpring(value, springOptions);
  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString()
  );

  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  return (
    <motion.span className={cn("tabular-nums", className)}>
      {display}
    </motion.span>
  );
}
