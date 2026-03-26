import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MousePointer2, Info, Maximize2 } from "lucide-react";
import { useLang } from "../context/LangContext";

export function HeroVirtualTour() {
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);
  const lang = useLang();

  const hotspots = [
    { 
      id: 1, x: 30, y: 40, 
      title: lang === 'vi' ? "Quảng Trường Trung Tâm" : "Central Plaza", 
      desc: lang === 'vi' ? "Khu vực tụ họp chính được xây dựng vào khoảng năm 200 TCN." : "The main gathering area constructed circa 200 BCE." 
    },
    { 
      id: 2, x: 65, y: 55, 
      title: lang === 'vi' ? "Tàn Tích Đền Thờ" : "Temple Ruins", 
      desc: lang === 'vi' ? "Tàn tích của cấu trúc nghi lễ chính." : "Remnants of the primary ceremonial structure." 
    },
    { 
      id: 3, x: 80, y: 30, 
      title: lang === 'vi' ? "Cống Dẫn Nước Phía Bắc" : "Northern Aqueduct", 
      desc: lang === 'vi' ? "Tàn tích hệ thống quản lý nước cổ đại." : "Ancient water management system remnants." 
    },
  ];

  return (
    <div className="relative w-full h-full group overflow-hidden">
      {/* Immersive Background */}
      <img 
        src="https://images.unsplash.com/photo-1719571316807-8a547b295ef9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwcnVpbiUyMGxhbmRzY2FwZSUyMDM2MCUyMHZpcnR1YWwlMjB0b3VyfGVufDF8fHx8MTc3NDUzMjIyN3ww&ixlib=rb-4.1.0&q=80&w=1080" 
        alt="Ancient Ruins 360 View"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[25s] ease-linear group-hover:scale-[1.03]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1B3022]/80 via-[#1B3022]/10 to-[#1B3022]/30 pointer-events-none" />

      {/* UI Overlay */}
      <div className="absolute top-6 left-6 right-6 flex justify-between items-start pointer-events-none z-10">
        <div className="bg-[#1B3022]/60 backdrop-blur-lg px-5 py-3 rounded-[16px] border border-[#F5F5DC]/20 shadow-[0_8px_30px_rgb(0,0,0,0.12)] pointer-events-auto">
          <h2 className="text-[#F5F5DC] font-serif text-xl font-medium tracking-wide">
            {lang === 'vi' ? 'Địa Điểm Alpha: Tái Tạo 360°' : 'Site Alpha: 360° Reconstruction'}
          </h2>
          <p className="text-[#F5F5DC]/80 font-inter text-xs flex items-center gap-1.5 mt-2">
            <MousePointer2 className="w-3 h-3" /> 
            {lang === 'vi' ? 'Tương tác với các điểm nóng để khám phá' : 'Interact with hotspots to explore'}
          </p>
        </div>
        <button className="w-12 h-12 bg-[#F5F5DC]/10 hover:bg-[#F5F5DC]/25 backdrop-blur-md rounded-full border border-[#F5F5DC]/20 flex items-center justify-center text-[#F5F5DC] transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.12)] pointer-events-auto cursor-pointer hover:scale-105">
          <Maximize2 className="w-5 h-5" />
        </button>
      </div>

      {/* Hotspots */}
      {hotspots.map((spot) => (
        <div 
          key={spot.id} 
          className="absolute z-20"
          style={{ top: `${spot.y}%`, left: `${spot.x}%` }}
        >
          <button
            onMouseEnter={() => setActiveHotspot(spot.id)}
            onMouseLeave={() => setActiveHotspot(null)}
            className="w-10 h-10 -ml-5 -mt-5 bg-[#F5F5DC] text-[#1B3022] rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.15)] border-2 border-[#1B3022]/20 hover:scale-110 transition-transform relative cursor-pointer group/spot"
          >
            <Info className="w-5 h-5 group-hover/spot:text-[#5C4033] transition-colors" />
            <span className="absolute inset-0 rounded-full animate-ping bg-[#F5F5DC] opacity-30"></span>
          </button>

          <AnimatePresence>
            {activeHotspot === spot.id && (
              <motion.div
                initial={{ opacity: 0, y: 15, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="absolute left-1/2 -translate-x-1/2 bottom-full mb-4 w-56 bg-[#1B3022]/90 backdrop-blur-md border border-[#5C4033] rounded-[16px] p-4 shadow-2xl"
              >
                <h4 className="font-serif text-[#F5F5DC] text-base mb-1.5">{spot.title}</h4>
                <p className="text-[#F5F5DC]/80 font-inter text-xs leading-relaxed">{spot.desc}</p>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#1B3022]/90 border-b border-r border-[#5C4033] rotate-45" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
