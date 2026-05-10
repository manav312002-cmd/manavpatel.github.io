"use client";
import SectionReveal from "./SectionReveal";
import { Send, Mail, MessageCircle } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async () => {
    setStatus("sending");
    const res = await fetch("https://formspree.io/f/xpqbokqa", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      setStatus("sent");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("error");
    }
  };

  return (
    <SectionReveal id="contact">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Let's build <br /> <span className="text-gradient">something great.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10">
              Have a project in mind or want to discuss engineering possibilities? Drop me a message and I'll get back to you as soon as possible.
            </p>
            <div className="flex flex-col gap-6">
              {[
                { icon: <Mail />, label: "Email", value: "manav312002@gmail.com", href: "mailto:manav312002@gmail.com" },
                { icon: <MessageCircle />, label: "WhatsApp", value: "+91 9737938167", href: "https://wa.me/9737938167" },
                { icon: <FaLinkedin />, label: "LinkedIn", value: "linkedin.com/in/manav", href: "https://www.linkedin.com/in/manav-patel-03j" },
                { icon: <FaGithub />, label: "GitHub", value: "github.com/manav", href: "https://github.com" },
              ].map((item, idx) => (
                <a key={idx} href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-primary group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">{item.label}</p>
                    <p className="text-gray-300 group-hover:text-white transition-colors">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="glass-card p-8 rounded-3xl flex flex-col gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
              <input type="text" id="name" value={formData.name} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors" placeholder="John Doe" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
              <input type="email" id="email" value={formData.email} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors" placeholder="john@example.com" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
              <textarea id="message" rows={4} value={formData.message} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors resize-none" placeholder="Tell me about your project..." />
            </div>

            {status === "sent" && <p className="text-green-400 text-sm text-center">✅ Message sent successfully!</p>}
            {status === "error" && <p className="text-red-400 text-sm text-center">❌ Failed to send. Try again.</p>}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="button"
              onClick={handleSubmit}
              disabled={status === "sending"}
              className="w-full py-4 mt-2 bg-primary text-black font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-white transition-colors shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] disabled:opacity-50"
            >
              {status === "sending" ? "Sending..." : "Send Message"} <Send size={18} />
            </motion.button>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
