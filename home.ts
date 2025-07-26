import React from "react";
import { Monitor, Shield, Wrench, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Services />
      <About />
      <Contact />
    </div>
  );
}