import { Outlet, useLocation } from "react-router";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { MessageCircle } from "lucide-react";
import { LangContext } from "../context/LangContext";

export function MainLayout() {
  const location = useLocation();
  const lang = location.pathname.startsWith("/vi") ? "vi" : "en";

  return (
    <LangContext.Provider value={lang}>
      <div className="min-h-screen bg-[#F5F5DC] text-[#1B3022] font-['Inter',sans-serif] flex flex-col selection:bg-[#5C4033] selection:text-[#F5F5DC] relative">
        {/* Subtle Texture Background */}
        <div 
          className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" 
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
          }}
        />
        {/* Light Topographic Pattern Mock */}
        <div 
          className="absolute inset-0 z-0 pointer-events-none opacity-[0.04]" 
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z' fill='%231B3022' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px'
          }}
        />

        <Navigation />
        
        <main className="flex-grow flex flex-col mt-28 z-10 relative">
          <Outlet />
        </main>
        
        <Footer />

        {/* Floating AI Chatbot - Smaller & Elegant */}
        <div className="fixed bottom-6 right-6 z-50 group">
          <div className="absolute bottom-full right-0 mb-3 w-40 bg-[#1B3022]/95 backdrop-blur-md text-[#F5F5DC] text-[11px] font-medium py-2 px-3 rounded-[12px] rounded-br-sm shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 pointer-events-none border border-[#F5F5DC]/10 text-center tracking-wide">
            {lang === 'vi' ? 'Cần hỗ trợ về di sản?' : 'Need help with heritage?'}
          </div>
          <button className="w-12 h-12 bg-[#5C4033] hover:bg-[#1B3022] text-[#F5F5DC] rounded-full flex items-center justify-center shadow-[0_8px_20px_rgb(92,64,51,0.3)] transition-all duration-300 hover:scale-110 cursor-pointer border border-[#F5F5DC]/20 relative">
            <MessageCircle className="w-5 h-5" />
            <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 border-2 border-[#5C4033] rounded-full"></span>
          </button>
        </div>
      </div>
    </LangContext.Provider>
  );
}
