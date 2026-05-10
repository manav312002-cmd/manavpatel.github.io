"use client";

import { motion } from "framer-motion";
import { Mail, Download, ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Available for new opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-4"
          >
            Hi, I'm <br />
            <span className="text-gradient">Manav Patel</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-3xl text-gray-400 font-medium mb-6"
          >
            Electronics & Communication Engineer <br className="hidden md:block" />
            <span className="text-gray-500">| Embedded Design Engineer</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-400 text-lg max-w-2xl mb-10 leading-relaxed"
          >
            I build intelligent hardware and robust embedded systems. Specializing in IoT, PCB design and Power Electronics, I transform complex engineering concepts into reliable, real-world solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 mb-12"
          >
            <a
              href="#projects"
              className="flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-black font-medium hover:bg-white transition-colors shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
            >
              View Projects <ArrowRight size={18} />
            </a>
            <a
              href="/files/Manav_Patel.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Manav_Patel_CV.pdf"
              className="flex items-center gap-2 px-8 py-4 rounded-full glass hover:bg-white/10 text-white font-medium transition-all"
            >
              Download CV <Download size={18} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center gap-6"
          >
            {[
              { icon: <FaGithub size={22} />, href: "https://github.com", label: "GitHub" },
              { icon: <FaLinkedin size={22} />, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: <Mail size={22} />, href: "mailto:contact@example.com", label: "Email" },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-12 h-12 rounded-full glass flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/50 transition-all hover:shadow-[0_0_15px_rgba(0,240,255,0.2)]"
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
