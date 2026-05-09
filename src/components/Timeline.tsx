"use client";

import SectionReveal from "./SectionReveal";

const timelineData = [
  {
    year: "Present",
    title: "Freelance Embedded Design Engineer",
    description: "Designing custom PCBs, writing firmware for ESP32/STM32, and developing IoT architectures for global clients.",
  },
  {
    year: "2023",
    title: "Advanced Power Electronics Research",
    description: "Focused on high-efficiency SMPS and Audio Amplifier designs, building working prototypes up to 500W.",
  },
  {
    year: "2021",
    title: "Electronics & Communication Engineering",
    description: "Began formal education, mastering circuit theory, microcontrollers, and digital signal processing.",
  },
  {
    year: "2019",
    title: "First Microprocessor Project",
    description: "Built a basic PIC based smart survelience robot, sparking my passion for embedded systems.",
  }
];

export default function Timeline() {
  return (
    <SectionReveal id="experience">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            My <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-gray-400 text-lg">
            A timeline of my engineering education, freelance work, and technical achievements.
          </p>
        </div>

        <div className="relative border-l-2 border-primary/30 ml-3 md:ml-0 md:pl-0">
          {timelineData.map((item, idx) => (
            <div key={idx} className="mb-12 relative pl-8 md:pl-0 md:flex md:justify-between w-full group">

              <div className={`md:w-[45%] ${idx % 2 === 0 ? "md:text-right md:pr-12" : "md:ml-auto md:pl-12"}`}>
                <div className="text-primary font-bold text-xl mb-1">{item.year}</div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>

              {/* Empty div for layout spacing on opposite side */}
              <div className="hidden md:block md:w-[45%]" />
            </div>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
