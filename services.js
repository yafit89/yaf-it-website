import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Monitor, Shield, Headphones, Home, Globe, Users } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Mac Repair",
    subtitle: "I'll come to you",
    description: "When your Mac isn't working right, I know how frustrating that can be. I'll come to your home or office, figure out what's wrong, and fix it properly. No rushing, no shortcuts – just careful attention to getting your computer back to how it should be.",
    features: ["I diagnose the real problem", "Fix it right the first time", "Make your Mac run like new", "Available same day when possible"]
  },
  {
    icon: Headphones,
    title: "Remote Help",
    subtitle: "Right when you need it",
    description: "Sometimes you just need someone to walk you through something or fix a quick issue. I can connect to your computer securely and help you immediately – whether it's installing software, setting something up, or teaching you how to do it yourself next time.",
    features: ["Screen sharing that actually works", "Patient, step-by-step guidance", "I'll teach you as we go", "Available for follow-up questions"]
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    subtitle: "Your digital safety matters",
    description: "Cyber threats are real, but you shouldn't have to become a security expert to stay safe. I'll assess what you actually need (not sell you what you don't), set up proper protection, and teach you the simple habits that make the biggest difference.",
    features: ["Honest assessment of your risks", "Protection that fits your life", "Simple habits that actually work", "Ongoing support when questions come up"]
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-thin text-gray-900 mb-6">
            How I Can Help You
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Every tech problem is different, and every person has different needs. Here's how I approach the most common challenges I help people with.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-blue-600 font-medium mb-4">
                    {service.subtitle}
                  </p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
