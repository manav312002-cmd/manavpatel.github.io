export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black/50 py-8 relative z-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Manav Patel. All rights reserved.
        </p>
        
        <div className="flex gap-6">
          {["LinkedIn", "GitHub", "Twitter"].map((social, idx) => (
            <a key={idx} href="#" className="text-sm text-gray-500 hover:text-primary transition-colors">
              {social}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
