"use client";

import SectionReveal from "./SectionReveal";
import { Award } from "lucide-react";

const certifications = [
  {
    title: "Basics of Power Electronics",
    issuer: "Udemy",
    date: "2026",
    link: "https://ude.my/UC-54c03e74-a80a-4a59-a8fe-89af91bfa212",
  },
  {
    title: "Embedded systems",
    issuer: "Alphatech Automation",
    date: "2023",
    link: "files/Alpha tech.pdf",
  },
];

export default function Certifications() {
  return (
    <SectionReveal id="certifications" className="bg-black/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Licenses & <span className="text-gradient">Certifications</span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, idx) => {
            const CardContent = (
              <>
                <Award className="text-secondary w-12 h-12 mb-4" />
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">{cert.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{cert.issuer}</p>
                <div className="mt-auto inline-block px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300">
                  Issued {cert.date}
                </div>
              </>
            );

            const cardClasses = "glass-card p-6 rounded-2xl flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300 h-full w-full md:w-80";

            return cert.link ? (
              <a key={idx} href={cert.link} target="_blank" rel="noopener noreferrer" className={cardClasses}>
                {CardContent}
              </a>
            ) : (
              <div key={idx} className={cardClasses}>
                {CardContent}
              </div>
            );
          })}
        </div>
      </div>
    </SectionReveal>
  );
}
