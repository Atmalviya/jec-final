"use client";

import { NavBar } from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Companies from "@/components/home/Companies";
import InformationSection from "@/components/home/InformationSection";
import DownloadSection from "@/components/home/DownloadSection";
import Footer from "@/components/home/Footer";
export default function Home() {

  return (
    <>
      <NavBar />
      <Hero />
      <Features />
      <Companies /> 
      <InformationSection />
      <DownloadSection />
      <Footer />
    </>
  );
}
