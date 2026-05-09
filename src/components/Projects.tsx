"use client";

import SectionReveal from "./SectionReveal";
import { ExternalLink, FileText, Image as ImageIcon, X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    title: "SMPS (Switching Mode Power Supply)",
    date: "Apr 2026 - Present",
    description: "Designed and developed a custom Switched Mode Power Supply (SMPS) for a client requirement, focused on efficiency, compact size, and stable output for embedded system applications. High-efficiency SMPS design. Compact PCB layout for space-constrained applications. Stable output with low ripple and noise. Overcurrent and short-circuit protection. Optimized thermal performance.",
    tags: ["Half bridge topology", "Internal Soft-Start", "short-circuit protection"],
    image: "/images/SMPS_top.png", // Example: place 'smps.jpg' in the 'public/images/' folder
    fileLink: "/files/Gerber.ZIP", // Example: place PDF in 'public/files/' folder
    gallery: ["/images/SMPS_top.png", "/images/SMPS_bott.png", "/images/smps_sch.png"], // Add multiple image paths here
    github: null,
    live: null
  },
  {
    title: "Smart Home Ecosystem",
    date: "Nov 2024 - Present",
    description: "A universal smart controller that communicates with your smart home device(s), giving: One central point of control for all appliances. Seamless operation without internet. Smart scene control + ambient feedback (light/temp/sound). Touch-sensitive zones (like a traditional gang plate). Gesture-based controls (swipe/hover for smart control).",
    tags: ["Wi-Fi 6", "Matter & Thread", "Zigbee", "mmWave", "RF"],
    image: "/images/SM_top.png", // Keep null to use the default placeholder
    fileLink: "/files/SM_Gerber.ZIP",
    gallery: ["/images/SM_top.png", "/images/SM_bott.png", "/images/SM_sch.png", "/images/SM_block.png",],
    github: "https://github.com/manav312002-cmd/smart-home-automation-esp32.git",
    live: null
  },
  {
    title: "Da Flip",
    date: "Associated with Dayro Nov 2024 – Jan 2026",
    description: "Da Flip can control home appliances to next level of smartness. you do not need to rewire. Switch assignment, BLE mesh, Bell switch, Hold vibrate begin anew. one switch, endless possibilities.",
    tags: ["Wi-Fi 4", "BLE", "RF", "RS-485", "UART", "I2C"],
    confidential: true,
    github: null,
    live: null
  },
  {
    title: "Da Twist",
    date: "Associated with Dayro Nov 2024 – Jan 2026",
    description: "Da Twist the future of effortless tuning, one knob many controls with built in sensors the Knob can sense your surroundings. Get instant notifications on your phone.",
    tags: ["Wi-Fi 4", "BLE", "RF", "RS-485", "UART", "I2C"],
    confidential: true,
    github: null,
    live: null
  },
  {
    title: "Da controller – Retrofit",
    date: "Associated with Dayro Oct 2024 – Jan 2026",
    description: "A small sized retrofit controller that controls from your figure tip, mobile application, scheduled scenes and many more. This device and control fan speed, lights, dimmable COB, not only that it can control whole building light.",
    tags: ["Wi-Fi 4", "BLE", "RF", "RS-485", "UART", "I2C"],
    image: "/images/Con_top.png", // Keep null to use the default placeholder
    fileLink: null,
    gallery: ["/images/Con_top.png", "/images/Con_bott.png"],
    confidential: true,
    github: null,
    live: null
  },
  {
    title: "Ferrite Core Transformer",
    date: "Nov 2022 - Jan 2025",
    description: "Ferrite Core Transformer is non-conductive, ferromagnetic compound that has its winding made from ferrite cores. They are used for high-frequency applications because they carry low coercivity and offer low eddy current losses.",
    tags: ["ExcellentIT tools", "Ferrite material", "Polyester tapes class B"],
    image: "/images/X1.jpg", // Keep null to use the default placeholder
    fileLink: null,
    gallery: ["/images/X1.JPG", "/images/X2.JPG"],
    confidential: false,
    github: null,
    live: null
  },
  {
    title: "5.1 Audio Processor (Dolby Digital)",
    date: "Jun 2021 – Nov 2024",
    description: "This is a 5.1 audio preamp board. The used ICs are PT2323 and PT2322. PT2323 is a 6-channel audio selector. It provides a built-in 2-channel to 6-channel translator and PT2322 is a 6-Channel audio processor. Master volume control, 6-channel individual volume control and 3-band tone control (Treble, Middle and Bass).",
    tags: ["Cirus logic", "Dolby – DTS", "HDMI2.1", "ARC", "OPT", "RCA", "Bluetooth v5", "USB 2.0", "stand-by", "IR remote", "Auto-Gain function", "6ch Trim"],
    image: "/images/decoder.png", // Keep null to use the default placeholder
    fileLink: "/files/5.1_decoder_test.ino",
    gallery: ["/images/aud_t.png", "/images/aud_b.png"],
    confidential: false,
    github: null,
    live: null
  }
];

export default function Projects() {
  const [galleryImages, setGalleryImages] = useState<string[] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);

  const openGallery = (images: string[]) => {
    setGalleryImages(images);
    setCurrentImageIndex(0);
    setZoomLevel(1);
  };

  const closeGallery = () => {
    setGalleryImages(null);
    setZoomLevel(1);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (galleryImages) {
      setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
      setZoomLevel(1);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (galleryImages) {
      setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
      setZoomLevel(1);
    }
  };

  const handleZoomIn = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomLevel(prev => Math.min(prev + 0.5, 4));
  };

  const handleZoomOut = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomLevel(prev => Math.max(prev - 0.5, 0.5));
  };

  return (
    <SectionReveal id="projects" className="bg-black/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A showcase of my recent engineering projects, ranging from embedded systems and IoT devices to complex power electronics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="glass-card rounded-2xl overflow-hidden group flex flex-col"
              whileHover={{ y: -10 }}
            >
              {/* Image Placeholder */}
              <div className="h-48 w-full bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-colors z-10" />
                <div
                  className="absolute inset-0 opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-500 bg-cover bg-center"
                  style={{ backgroundImage: `url('${project.image || "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop"}')` }}
                />
                {(project as any).confidential && (
                  <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/70 backdrop-blur-[3px]">
                    <span className="border-2 border-red-500 text-red-500 bg-red-500/10 px-4 py-2 font-bold tracking-widest uppercase text-sm rounded -rotate-12 shadow-[0_0_20px_rgba(239,68,68,0.4)] pointer-events-none select-none">
                      Confidential
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-primary text-xs mb-3 font-medium">{project.date}</p>
                <p className="text-gray-400 text-sm mb-6 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="View Source">
                      <FaGithub size={20} />
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="Live Preview">
                      <ExternalLink size={20} />
                    </a>
                  )}
                  {project.fileLink && (
                    <a href={project.fileLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="View Document/PDF">
                      <FileText size={20} />
                    </a>
                  )}
                  {(project as any).gallery && (project as any).gallery.length > 0 && (
                    <button onClick={() => openGallery((project as any).gallery)} className="text-gray-400 hover:text-white transition-colors" title="View Gallery">
                      <ImageIcon size={20} />
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {galleryImages && galleryImages.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
            onClick={closeGallery}
          >
            <div className="absolute top-6 right-6 flex items-center gap-4 z-[110]">
              <button onClick={handleZoomOut} className="text-gray-400 hover:text-white transition-colors bg-black/50 p-2 rounded-full">
                <ZoomOut size={24} />
              </button>
              <button onClick={handleZoomIn} className="text-gray-400 hover:text-white transition-colors bg-black/50 p-2 rounded-full">
                <ZoomIn size={24} />
              </button>
              <button onClick={closeGallery} className="text-gray-400 hover:text-white transition-colors ml-4 bg-black/50 p-2 rounded-full">
                <X size={28} />
              </button>
            </div>

            <div className="relative max-w-6xl w-full h-full max-h-[85vh] flex items-center justify-center">
              {galleryImages.length > 1 && (
                <button onClick={prevImage} className="absolute left-0 md:left-4 text-white hover:text-primary p-2 bg-black/50 rounded-full transition-colors z-[110]">
                  <ChevronLeft size={36} />
                </button>
              )}

              <div className="w-full h-full flex items-center justify-center overflow-auto">
                <img
                  src={galleryImages[currentImageIndex]}
                  alt="Gallery preview"
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl relative z-[105]"
                  style={{ transform: `scale(${zoomLevel})`, transition: 'transform 0.2s ease-in-out', transformOrigin: 'center' }}
                  onClick={(e) => e.stopPropagation()}
                />
              </div>

              {galleryImages.length > 1 && (
                <button onClick={nextImage} className="absolute right-0 md:right-4 text-white hover:text-primary p-2 bg-black/50 rounded-full transition-colors z-[110]">
                  <ChevronRight size={36} />
                </button>
              )}
            </div>

            <div className="absolute bottom-6 left-0 w-full text-center text-white/50 text-sm tracking-widest font-mono z-[110]">
              {currentImageIndex + 1} / {galleryImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionReveal>
  );
}
