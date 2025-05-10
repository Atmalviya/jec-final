import { Facebook, FacebookIcon, LinkedinIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const DownloadsSection = () => {
  return (
    <div className="container mx-auto py-12 px-40">
      <div className="flex flex-col lg:flex-row lg:space-x-8 justify-between items-start">
        {/* Downloads Section */}
        <div
          className="lg:w-1/2"
          data-scroll-reveal="enter from the bottom after 0.35s"
        >
          <h2 className="text-3xl font-bold">Downloads</h2>
          <hr className="my-4 border-t-2 border-gray-200" />
          <div className="space-y-4">
            <h4 className="text-lg">
              Official Brochure:{" "}
              <a
                href="assets/pdf/NEW JEC Placement Brochure 2020-21.pdf"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                JEC Profile
              </a>
            </h4>
            <h4 className="text-lg">
              Registration procedure:{" "}
              <a
                href="assets/pdf/tpo_registration_guide.pdf"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                Click Here
              </a>
            </h4>
            <h4 className="text-lg">
              Sample verification form:{" "}
              <a
                href="assets/pdf/sample_verification_form.pdf"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                Click Here
              </a>
            </h4>
          </div>

          {/* Address Section */}
          <h2 className="text-3xl font-bold mt-10">Address</h2>
          <hr className="my-4 border-t-2 border-gray-200" />
          <div className="space-y-2">
            <h4 className="text-lg">Jabalpur Engineering College</h4>
            <h4 className="text-lg">Gokalpur, Jabalpur.</h4>
            <h4 className="text-lg">Madhya Pradesh, India 482011.</h4>
          </div>
        </div>

        {/* Social Section */}
        <div
          className="lg:w-1/2 mt-10 lg:mt-0"
          data-scroll-reveal="enter from the bottom after 0.35s"
        >
          <h2 className="text-3xl font-bold">Social</h2>
          <hr className="my-4 border-t-2 border-gray-200" />
          <div className="space-y-4">
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/JECJabalpur"
                target="_blank"
                rel="noreferrer"
              >
                <FacebookIcon className=" transition-transform duration-300 transform hover:scale-110 w-20 h-20"/>
              </a>
              <a
                href="https://www.linkedin.com/school/jabalpur-engineering-college/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedinIcon className=" transition-transform duration-300 transform hover:scale-110 w-20 h-20"/>
              </a>
              <a href="https://www.jecjabalpur.ac.in/" target="_blank" rel="noreferrer">
                <Image width={120} height={120}
                  src="/logo.png"
                  alt="JEC Website"
                  className="w-20 h-20transition-transform duration-300 transform hover:scale-110"
                />
              </a>
            </div>

            <h4 className="text-lg">
              Student Helpline:{" "}
              <a
                href="mailto:tpo.student@jecjabalpur.ac.in"
                className="text-blue-600 hover:underline"
              >
                tpo.student@jecjabalpur.ac.in
              </a>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadsSection;
