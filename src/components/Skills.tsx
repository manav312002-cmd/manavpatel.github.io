"use client";

import SectionReveal from "./SectionReveal";
import { motion } from "framer-motion";

const skills = [
  { category: "Hardware & Electronics", items: ["Embedded Systems", "PCB Design", "Power Electronics", "Altium Designer", "Arduino", "PIC Microcontrollers"] },
  { category: "IoT & Networking", items: ["ESP32", "IoT Systems", "Home Automation", "Wireless Protocols"] },
  { category: "Software", items: ["Altium Pro", "LTSpice", "Proteus Pro", "Multi Sim v14"] },
  { category: "Other Expertise", items: ["Product Design", "Industrial Design", "Research & Development"] }
];

export default function Skills() {
  return (
    <SectionReveal id="skills" className="relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A comprehensive overview of the tools, technologies, and methodologies I use to build robust hardware and software solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skills.map((skillGroup, idx) => (
            <motion.div
              key={idx}
              className="glass-card p-8 rounded-2xl"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-2 h-8 rounded-full bg-primary" />
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((item, itemIdx) => (
                  <span
                    key={itemIdx}
                    className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-sm font-medium hover:border-primary/50 hover:text-primary transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
