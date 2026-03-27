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
    <div className="relative w-full h-full group overflow-hidden bg-[#1B3022]">
      {/* Immersive 360 Virtual Tour Link Layer */}
      <div className="absolute inset-0 w-full h-full">
        <iframe 
          src="https://23000908-cell.github.io/3Dvistar_premium/" 
          title="360 Virtual Tour"
          className="w-full h-full border-none"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* UI Overlay - Giữ nguyên các hiệu ứng gradient và text để tăng tính thẩm mỹ */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1B3022]/40 via-transparent to-[#1B3022]/20 pointer-events-none" />

      <div className="absolute top-6 left-6 right-6 flex justify-between items-start pointer-events-none z-10">
        <div className="bg-[#1B3022]/70 backdrop-blur-lg px-5 py-3 rounded-[16px] border border-[#F5F5DC]/20 shadow-xl pointer-events-auto">
          <h2 className="text-[#F5F5DC] font-serif text-xl font-medium tracking-wide">
            {lang === 'vi' ? 'Trải Nghiệm Di Sản: Tái Tạo 360°' : 'Heritage Experience: 360° Reconstruction'}
          </h2>
          <p className="text-[#F5F5DC]/80 font-inter text-xs flex items-center gap-1.5 mt-2">
            <MousePointer2 className="w-3 h-3" /> 
            {lang === 'vi' ? 'Sử dụng chuột để xoay và khám phá không gian' : 'Use mouse to rotate and explore space'}
          </p>
        </div>
        
        <button 
          onClick={() => window.open("https://23000908-cell.github.io/3Dvistar_premium/", "_blank")}
          className="w-12 h-12 bg-[#F5F5DC]/10 hover:bg-[#F5F5DC]/25 backdrop-blur-md rounded-full border border-[#F5F5DC]/20 flex items-center justify-center text-[#F5F5DC] transition-all duration-300 pointer-events-auto cursor-pointer hover:scale-110"
          title="Full screen tour"
        >
          <Maximize2 className="w-5 h-5" />
        </button>
      </div>

      {/* Hotspots Overlay - Tùy chỉnh nếu bạn muốn giữ các điểm tương tác của Figma đè lên tour 360 */}
      {hotspots.map((spot) => (
        <div 
          key={spot.id} 
          className="absolute z-20"
          style={{ top: `${spot.y}%`, left: `${spot.x}%` }}
        >
          <button
            onMouseEnter={() => setActiveHotspot(spot.id)}
            onMouseLeave={() => setActiveHotspot(null)}
            className="w-8 h-8 -ml-4 -mt-4 bg-[#F5F5DC]/90 text-[#1B3022] rounded-full flex items-center justify-center shadow-lg border border-[#1B3022]/20 hover:scale-110 transition-transform relative cursor-pointer group/spot"
          >
            <Info className="w-4 h-4" />
            <span className="absolute inset-0 rounded-full animate-ping bg-[#F5F5DC] opacity-30"></span>
          </button>

          <AnimatePresence>
            {activeHotspot === spot.id && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="absolute left-1/2 -translate-x-1/2 bottom-full mb-4 w-48 bg-[#1B3022]/95 backdrop-blur-md border border-[#5C4033] rounded-[12px] p-3 shadow-2xl"
              >
                <h4 className="font-serif text-[#F5F5DC] text-sm mb-1">{spot.title}</h4>
                <p className="text-[#F5F5DC]/80 font-inter text-[10px] leading-snug">{spot.desc}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}