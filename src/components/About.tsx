"use client";

import SectionReveal from "./SectionReveal";
import { Cpu, Zap, PenTool, Wifi, Settings, Layout } from "lucide-react";

const focusAreas = [
  { icon: <Zap size={24} />, title: "Power Electronics" },
  { icon: <Cpu size={24} />, title: "Embedded Systems" },
  { icon: <PenTool size={24} />, title: "Industrial Design" },
  { icon: <Layout size={24} />, title: "PCB Design" },
  { icon: <Wifi size={24} />, title: "IoT Development" },
  { icon: <Settings size={24} />, title: "Audio Amplifier Systems" },
];

const stats = [
  { value: "6+", label: "Projects Completed" },
  { value: "15+", label: "Technologies Used" },
  { value: "2+", label: "Years Learning" },
  { value: "10+", label: "R&D Prototypes" },
];

export default function About() {
  return (
    <SectionReveal id="about">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Text Content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Engineering <span className="text-gradient">The Future</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              I am an Electronics & Communication Engineer with a profound passion for bringing hardware to life. My expertise lies at the intersection of circuit design, firmware programming, and physical product development.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              Whether it's designing efficient power converters, creating high-fidelity audio amplifiers, or programming ESP32 for smart IoT solutions, I thrive on solving complex engineering problems with elegant and optimized solutions.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {focusAreas.map((area, idx) => (
                <div key={idx} className="flex items-center gap-3 text-gray-300">
                  <div className="text-primary">{area.icon}</div>
                  <span className="font-medium">{area.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Grid */}
          <div className="lg:w-1/2 w-full">
            <div className="grid grid-cols-2 gap-6 relative">
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full -z-10" />

              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className={`glass-card p-8 rounded-2xl flex flex-col justify-center items-center text-center ${idx === 1 || idx === 3 ? "lg:translate-y-8" : ""
                    }`}
                >
                  <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-primary font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </SectionReveal>
  );
}
