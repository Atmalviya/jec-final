import React from "react";
import * as motion from "framer-motion/client";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat text-gray-100"
      style={{
        backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)), url('/building.jpg')",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <motion.h1
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl font-bold leading-none sm:text-6xl"
          >
            Delivering Quality Education
            <span> Since 1947</span>
          </motion.h1>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl"
          >
            Jabalpur Engineering College (JEC) was established as the Government
            Engineering College, Jabalpur on July 7, 1947, during the British
            rule in India. Renowned for its legacy of excellence, JEC is one of
            the oldest engineering institutions in the country. It has
            consistently provided high-quality technical education, research
            opportunities, and practical training to aspiring engineers.
            {/* <br />
            <br />
            The college is affiliated with Rajiv Gandhi Proudyogiki
            Vishwavidyalaya and offers a diverse range of undergraduate and
            postgraduate programs. Known for its state-of-the-art facilities and
            experienced faculty, JEC has been instrumental in shaping the
            careers of numerous engineers who have made significant
            contributions in various fields. */}
          </motion.p>
        </div>
        <div className="flex flex-col gap-16 items-center justify-center p-6 lg:mt-20 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          {/* Image is hidden on mobile, displayed on medium screens and above */}
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Image
              src="/logo.png"
              alt="Hero"
              width={300}
              height={300}
              className="object-contain hidden md:block h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </motion.div>
          {/* <div className="flex flex-col gap-10 space-y-4 sm:items-center sm:justify-center sm:flex-col sm:space-y-0 sm:space-x-4 lg:justify-start">
            <motion.p
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              Register/ Login as
            </motion.p>
            <div>
            <motion.a
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              href="#"
              className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50"
            >
              Students
            </motion.a>
            <motion.a
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 2 }}
              href="#"
              className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800"
            >
              Company
            </motion.a>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
