"use client";
import React, { useRef } from "react";
import * as motion from "framer-motion/client";
import { useInView } from "framer-motion";

const Features = () => {
  const featureData = [
    {
      title: "Quality Education",
      description:
        "The departments are equipped with high-end lab facilities. High Voltage Lab, Electrical Dept. has been awarded as Centre of Excellence by Indian Govt. and is one of its kind in India. Labs at Civil and Mechanical dept. are used by Govt. for various testing purposes. Computer Science dept. has over 350 computers with 100Mbps Internet facility.",
    },
    {
      title: "Employability Tests",
      description:
        "We conduct frequent employability and assessment tests at college to prepare students for campus placements. Since its inaugural we have seen a sharp spike in our placements.",
    },
    {
      title: "Min 45 Days Ind. Training",
      description:
        "During the even semester break students undergo Summer Internships and Vocational training at various Industries in India and abroad. By the end of III year every student has got a minimum 45 days of Industry exposure in his area of expertise.",
    },
    {
      title: "Sessions by Ind. Experts",
      description:
        "Various companies visit our campus all round the year for interaction sessions with the students and guide them with the latest trends and technologies. Students have a beforehand knowledge about the industry needs.",
    },
    {
      title: "Alumni Interaction Meets",
      description:
        "Being one of the oldest colleges in Central India, we have a strong alumni base. Our alumni from all round the globe come and deliver Workshops & Seminars on various trending topics and also share their experiences with the students.",
    },
    {
      title: "More than Academics",
      description:
        "We have a wide spectrum of students excelling in different fields. Our students have presented papers at the International level, cleared Google Summer of Code, are interns at Top International Universities, and winners of National Level Sports and Cultural Championships. JEC provides a platform for overall development of students, providing them exposure to brighter career opportunities.",
    },
  ];

  return (
    <div>
      <section className="m-4 md:m-8 dark:bg-gray-100 dark:text-gray-800">
        <div className="container p-4 mx-auto my-6 space-y-1 text-center">
          <motion.h2
            initial={{ opacity: 0, rotateX: -90 }}
            whileInView={{ opacity: 1, rotateX: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="pb-3 text-3xl font-bold md:text-4xl"
          >
            WHY CHOOSE JEC
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            JEC was established as the Government Engineering College, Jabalpur
            on 7 July 1947, making it the oldest engineering institute of
            central India and among the oldest in India. The TPO team active
            since the 1970s takes utmost care in providing students with
            career-based training, making them industry-ready.
          </motion.p>
        </div>
        <div className="container grid justify-center gap-4 mx-auto lg:grid-cols-2 xl:grid-cols-3">
          {featureData.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Features;

const FeatureCard = ({ title, description, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Trigger only once when in view

  // Different animation variants for different types of animations
  const animations = [
    {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
    {
      hidden: { opacity: 0, x: -100 },
      visible: { opacity: 1, x: 0 },
    },
    {
      hidden: { opacity: 0, x: -100 },
      visible: { opacity: 1, x: 0 },
    },
    {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
    {
      hidden: { opacity: 0, x: -100 },
      visible: { opacity: 1, x: 0 },
    },
    {
      hidden: { opacity: 0, x: -100 },
      visible: { opacity: 1, x: 0 },
    },
  ];

  // Cycle through different animations for each feature card
  const animationVariant = animations[index % animations.length];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"} // Animate only when in view
      variants={animationVariant}
      transition={{ duration: 0.5, delay: index * 0.2, ease: "easeInOut" }}
      className="flex flex-col px-8 py-6 shadow-lg bg-white rounded-lg"
    >
      <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font dark:text-gray-800">
        {title}
      </h2>
      <p className="flex-1 mb-4 text-base leading-relaxed dark:text-gray-600">
        {description}
      </p>
    </motion.div>
  );
};
