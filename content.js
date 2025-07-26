
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const contactMethods = [
  {
    icon: Phone,
    title: "Call Me",
    description: "The quickest way to get help",
    value: "+972-52-813-3354",
    action: "tel:+972528133354"
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Send photos of error messages",
    value: "Message Me",
    action: "https://wa.me/972528133354"
  },
  {
    icon: Mail,
    title: "Email",
    description: "For detailed questions",
    value: "support@yafithaftzadi.com",
    action: "mailto:support@yafithaftzadi.com"
  }
];

const businessHours = [
  { day: "Monday - Thursday", hours: "09:00 - 17:00" },
  { day: "Friday", hours: "09:00 - 14:00" },
  { day: "Saturday", hours: "Closed" },
  { day: "Sunday", hours: "Closed" }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-thin text-gray-900 mb-6">
            I'm Here to Help
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Don't struggle with tech problems alone. Whether it's urgent or you just have a quick question, reach out and let's figure it out together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Methods & Hours */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
