import { GraduationCap, Landmark, LibraryBig, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1B3022] text-[#F5F5DC]/80 py-16 border-t border-[#F5F5DC]/10 mt-12">
      <div className="max-w-screen-2xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-serif text-2xl text-[#F5F5DC] mb-4">Digital Heritage Consortium</h3>
            <p className="text-sm leading-relaxed max-w-md opacity-90">
              A collaborative initiative dedicated to the preservation, academic research, and interactive dissemination of global cultural heritage through advanced digital methodologies.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium text-[#F5F5DC] mb-4 uppercase text-xs tracking-widest">Selected Citations</h4>
            <ul className="space-y-3 text-xs leading-relaxed opacity-80">
              <li>Dr. H. Aldridge (2025). <i>Spatial Narratives in Virtual Antiquity.</i> Journal of Digital Archaeology.</li>
              <li>Institute of Heritage Studies (2024). <i>Interactive Mapping for Preservation.</i></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-[#F5F5DC] mb-4 uppercase text-xs tracking-widest">Partners</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2 text-sm opacity-80 hover:opacity-100 transition-opacity cursor-pointer">
                <Landmark className="w-4 h-4" /> <span>National Museum</span>
              </div>
              <div className="flex items-center gap-2 text-sm opacity-80 hover:opacity-100 transition-opacity cursor-pointer">
                <GraduationCap className="w-4 h-4" /> <span>Global Univ.</span>
              </div>
              <div className="flex items-center gap-2 text-sm opacity-80 hover:opacity-100 transition-opacity cursor-pointer">
                <LibraryBig className="w-4 h-4" /> <span>State Archive</span>
              </div>
              <div className="flex items-center gap-2 text-sm opacity-80 hover:opacity-100 transition-opacity cursor-pointer">
                <Globe className="w-4 h-4" /> <span>GeoHeritage Co.</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-[#F5F5DC]/20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-60">
          <p>© 2026 Digital Heritage & Cultural Tourism Initiative. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-[#F5F5DC] cursor-pointer">Privacy Policy</span>
            <span className="hover:text-[#F5F5DC] cursor-pointer">Terms of Academic Use</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
