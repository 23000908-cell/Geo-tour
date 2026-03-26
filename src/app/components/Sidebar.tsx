import { motion, AnimatePresence } from "motion/react";
import { X, Map, Archive, BarChart2, Settings, ChevronRight } from "lucide-react";
import { useLang } from "../context/LangContext";

export function Sidebar({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const lang = useLang();
  
  const links = [
    { icon: Map, en: "GIS Data & Maps", vi: "Bản Đồ & Dữ Liệu GIS" },
    { icon: Archive, en: "Digital Archive", vi: "Lưu Trữ Số Hóa" },
    { icon: BarChart2, en: "Metrics & Analytics", vi: "Thống Kê Khách Truy Cập" },
    { icon: Settings, en: "Preferences", vi: "Cài Đặt Hệ Thống" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#1B3022]/40 backdrop-blur-sm z-[60]"
          />
          
          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }} 
            animate={{ x: 0 }} 
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-80 max-w-[80vw] bg-[#F5F5DC] z-[70] shadow-2xl border-l border-[#5C4033]/10 p-6 flex flex-col"
          >
            <div className="flex justify-between items-center mb-10">
              <h2 className="font-serif text-2xl text-[#1B3022]">
                {lang === 'vi' ? 'Mở Rộng' : 'Explore More'}
              </h2>
              <button onClick={onClose} className="p-2 bg-[#5C4033]/5 rounded-full hover:bg-[#5C4033]/15 transition-colors cursor-pointer group">
                <X className="w-5 h-5 text-[#1B3022] group-hover:scale-110 transition-transform" />
              </button>
            </div>
            
            <div className="flex flex-col gap-3">
              {links.map((l, i) => (
                <button key={i} className="flex items-center justify-between p-4 rounded-2xl hover:bg-[#5C4033]/10 hover:shadow-sm text-[#1B3022] transition-all duration-300 group cursor-pointer text-left">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#5C4033]/5 flex items-center justify-center group-hover:bg-[#5C4033] group-hover:text-[#F5F5DC] transition-colors shadow-sm">
                      <l.icon className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-sm font-inter tracking-wide">{lang === 'vi' ? l.vi : l.en}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-[#1B3022]/30 group-hover:text-[#5C4033] transition-colors" />
                </button>
              ))}
            </div>
            
            <div className="mt-auto pt-6 border-t border-[#5C4033]/10">
              <p className="text-xs text-[#1B3022]/50 font-inter text-center">
                {lang === 'vi' ? '© 2026 Sáng Kiến Di Sản Số' : '© 2026 Digital Heritage Initiative'}
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
