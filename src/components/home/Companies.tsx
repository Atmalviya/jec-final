"use client";
import InfiniteSlider from "@/components/ui/InfiniteSlider";
import Image from "next/image";
import { motion } from "framer-motion";
const Companies = () => {
  return (
    <section id="course-sec" className="container mx-auto py-12 px-4">
      <div className="text-center ">
        <div className="max-w-3xl mx-auto">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl font-bold"
          >
            Companies Visited Last year
          </motion.h1>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 text-lg"
          >
            <h4>
              Jabalpur Engineering College previously known as Government
              Engineering College, was established on 7 July 1947. It is one of
              the oldest technical institutions in Central India. JEC offers
              B.Tech degree courses in eight disciplines and nine postgraduate
              courses in engineering fields, three postgraduate courses in
              applied Sciences and M.C.A.
            </h4>
          </motion.div>
        </div>
      </div>
      <InfiniteSlider gap={24} reverse className="mt-12">
        <Image
          height={120}
          width={120}
          src="/building.jpg"
          alt="Apple Music logo"
          className="h-[120px] w-auto"
        />
        <Image
          height={120}
          width={120}
          src="/building.jpg"
          alt="Chrome logo"
          className="h-[120px] w-auto"
        />
        <Image
          height={120}
          width={120}
          src="/building.jpg"
          alt="Strava logo"
          className="h-[120px] w-auto"
        />
        <Image
          height={120}
          width={120}
          src="/building.jpg"
          alt="Nintendo logo"
          className="h-[120px] w-auto"
        />
        <Image
          height={120}
          width={120}
          src="/building.jpg"
          alt="Jquery logo"
          className="h-[120px] w-auto"
        />
        <Image
          height={120}
          width={120}
          src="/building.jpg"
          alt="Prada logo"
          className="h-[120px] w-auto"
        />
      </InfiniteSlider>
    </section>
  );
};

export default Companies;
