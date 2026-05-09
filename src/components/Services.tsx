"use client";

import { Roboto } from "next/font/google";
import SectionReveal from "./SectionReveal";
import { Cpu, Layout, Bot, Wifi, ShieldCheck, Beaker } from "lucide-react";

const services = [
  { icon: <Cpu />, title: "Embedded System Design", desc: "Custom firmware and microcontroller integration for intelligent devices from concept to production." },
  { icon: <Layout />, title: "PCB Design", desc: "High-speed, multi-layer printed circuit board design using Altium and KiCad." },
  { icon: <Wifi />, title: "IoT Solutions", desc: "End-to-end IoT architectures, from edge sensors to cloud dashboards." },
  { icon: <Beaker />, title: "Research Assistance", desc: "Prototyping and R&D support for innovative engineering projects." },
  { icon: <ShieldCheck />, title: "Technical Consulting", desc: "Expert advice on hardware selection, power management, and manufacturing." },
  { icon: <Bot />, title: "AI Operator", desc: "AI Operator specializing in AI tools, automation workflows, prompt engineering, research assistance, and digital productivity solutions." }
];

export default function Services() {
  return (
    <SectionReveal id="services">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Specialized <span className="text-gradient">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Delivering comprehensive hardware engineering and technical services for startups and established enterprises.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="glass-card p-8 rounded-2xl group relative overflow-hidden"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500" />
              <div className="absolute -inset-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,var(--color-primary)_0%,transparent_70%)] mix-blend-screen pointer-events-none blur-3xl z-0" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
