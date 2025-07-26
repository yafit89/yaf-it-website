
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Star, Users, Clock } from "lucide-react";

const highlights = [
  {
    icon: Star,
    title: "I really know Macs",
    description: "Years of hands-on experience with every Mac model and macOS version"
  },
  {
    icon: Users,
    title: "No tech-speak here",
    description: "I explain things in plain language and make sure you understand"
  },
  {
    icon: CheckCircle,
    title: "Your privacy comes first",
    description: "I take your data security personally – it's never just business"
  },
  {
    icon: Clock,
    title: "When you need me, I'm here",
    description: "Flexible scheduling and emergency support when things go wrong"
  }
];

export default function About() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white" id="about">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-thin text-gray-900 mb-8">
              Why Choose 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                YAF-IT Service?
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed font-light">
              Technology should make your life easier, not more stressful. When something isn't working right, you need someone who listens, understands what you actually need, and takes the time to fix it properly.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              I've been helping people with their Mac and tech issues for years, and I've learned that every problem is unique. What works for one person might not work for another. That's why I don't do cookie-cutter solutions – I take the time to understand your specific situation and find the right fix for you.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <highlight.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
