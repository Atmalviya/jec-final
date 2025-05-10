import { NavBar } from "@/components/home/Navbar";
import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen overflow-hidden">
      <NavBar />
      <div className="grid h-[calc(100vh-4rem)] grid-cols-1 lg:grid-cols-3">
        <div className="relative hidden bg-muted lg:block lg:col-span-2">
          <Image
            width={1000}
            height={1000}
            src="/building.jpg"
            alt="Image"
            className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          />
        </div>
        <div className="flex flex-col gap-4 p-6 md:p-10 lg:col-span-1">
          <div className="flex flex-1 items-center justify-center">
            <div className="w-full max-w-xs">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
