"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedNumberInView from "@/components/ui/AnimatedNumberInView";

const InformationSection = () => {
  return (
    <section id="course-sec" className="container mx-auto py-12 px-4">
      <div className="text-center">
        <div className="max-w-3xl mx-auto">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl font-bold"
          >
            INFORMATION
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

      <div className="flex flex-col lg:flex-row items-center justify-between mt-12 gap-12">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:w-1/2"
        >
          <Image
            src="/building.jpg"
            alt="College Building"
            width={700}
            height={600}
            className="rounded-lg object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:w-1/2 space-y-6"
        >
          <div className="bg-white rounded-lg shadow-lg">
            <div className="p-4 cursor-pointer">
              <h4 className="font-semibold">Total Students</h4>
              <p className="mt-2">“OUR STRENGTH 64 BATCHES FORMING”.</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg">
            <div className="p-4 cursor-pointer">
              <h4 className="font-semibold">Companies Visited</h4>
              <p className="mt-2">
                <b>125+ Companies have visited our college.</b>
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg">
            <div className="p-4 cursor-pointer">
              <h4 className="font-semibold">Placed Students</h4>
              <p className="mt-2">
                <b>150+ Students got placed in Top Companies.</b>
              </p>
            </div>
          </div>

          <div className="bg-blue-100 rounded-lg shadow-lg p-6 text-center">
            <div className="flex items-center justify-center gap-4">
              <span className="text-6xl font-bold">
                <AnimatedNumberInView />
              </span>
              <span className="text-4xl font-bold">
                + Years
              </span>
            </div>
            <hr className="my-4 border-t-2 border-blue-500" />
            <h3 className="text-xl">And still going.</h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InformationSection;
