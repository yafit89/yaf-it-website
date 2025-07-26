
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-light text-gray-800 mb-2 tracking-wide">
            YAF-IT SERVICE
          </h1>
          
          <h2 className="text-3xl md:text-5xl font-thin text-gray-900 mb-6 tracking-tight leading-tight">
            Support that actually supports you.
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light max-w-4xl mx-auto leading-relaxed">
            Your time matters. Your peace of mind matters. So I treat your problem like my own.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button 
            size="lg"
            className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-6 text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            onClick={scrollToContact}
          >
            Let's Talk
          </Button>
          
          <Button 
            variant="outline"
            size="lg"
            className="border-2 border-gray-300 hover:border-gray-400 px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
            onClick={() => window.open('tel:+972528133354')}
          >
            <Phone className="mr-2 w-5 h-5" />
            Call Me Now
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16"
        >
          <img 
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=80"
            alt="Modern technology workspace with laptop and code"
            className="mx-auto rounded-2xl shadow-2xl max-w-4xl w-full"
          />
        </motion.div>
      </div>
    </section>
  );
}

