import { useState } from "react";
import { Link } from "react-router";
import { Compass, Menu, User } from "lucide-react";
import { useLang } from "../context/LangContext";
import { Sidebar } from "./Sidebar";

export function Navigation() {
  const lang = useLang();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <header className="fixed top-6 inset-x-6 md:inset-x-8 z-50 bg-[#F5F5DC]/85 backdrop-blur-xl border border-[#5C4033]/15 shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-[24px] transition-all">
        <div className="max-w-screen-2xl mx-auto px-6 h-16 flex items-center justify-between">
          
          {/* Logo Area */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[#1B3022] text-[#F5F5DC] rounded-[10px] flex items-center justify-center shadow-md">
              <Compass className="w-5 h-5" />
            </div>
            <span className="font-serif text-xl font-bold text-[#1B3022] tracking-wide hidden sm:block">
              {lang === 'vi' ? 'Di Sản Số' : 'Digital Heritage'}
            </span>
          </div>
          
          {/* Main Navigation - 3 Simplified Categories */}
          <nav className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
            {[
              { en: "Discover", vi: "Khám Phá" },
              { en: "Research", vi: "Nghiên Cứu" },
              { en: "Exhibitions", vi: "Triển Lãm" },
            ].map((item) => (
              <button key={item.en} className="text-sm font-semibold text-[#1B3022]/70 hover:text-[#5C4033] transition-colors cursor-pointer relative group">
                {lang === 'vi' ? item.vi : item.en}
                <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-[#5C4033] transition-all group-hover:w-full group-hover:left-0"></span>
              </button>
            ))}
          </nav>
          
          {/* Actions Area - Far Right */}
          <div className="flex items-center gap-3 sm:gap-5">
            
            {/* Language Switcher */}
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#1B3022] bg-[#5C4033]/5 p-1 rounded-full border border-[#5C4033]/10">
              <Link 
                to="/" 
                className={`flex items-center gap-1 px-3 py-1.5 rounded-full transition-all duration-300 ${lang === 'en' ? 'bg-[#F5F5DC] shadow-sm text-[#5C4033]' : 'text-[#1B3022]/50 hover:text-[#1B3022]'}`}
              >
                <span className={`text-[12px] ${lang === 'en' ? 'grayscale-0' : 'grayscale opacity-60'}`}>🇺🇸</span> EN
              </Link>
              <Link 
                to="/vi" 
                className={`flex items-center gap-1 px-3 py-1.5 rounded-full transition-all duration-300 ${lang === 'vi' ? 'bg-[#F5F5DC] shadow-sm text-[#5C4033]' : 'text-[#1B3022]/50 hover:text-[#1B3022]'}`}
              >
                <span className={`text-[12px] ${lang === 'vi' ? 'grayscale-0' : 'grayscale opacity-60'}`}>🇻🇳</span> VI
              </Link>
            </div>

            <div className="h-6 w-px bg-[#5C4033]/20 hidden md:block"></div>

            {/* Login Button */}
            <button className="hidden md:flex items-center gap-2 px-4 py-2 text-[#1B3022] text-sm font-semibold hover:bg-[#5C4033]/10 rounded-full transition-colors cursor-pointer group">
              <User className="w-4 h-4 group-hover:text-[#5C4033] transition-colors" />
              <span className="group-hover:text-[#5C4033] transition-colors">
                {lang === 'vi' ? 'Đăng Nhập' : 'Login'}
              </span>
            </button>
            
            {/* Sidebar Toggle */}
            <button 
              onClick={() => setSidebarOpen(true)} 
              className="w-10 h-10 bg-[#1B3022] hover:bg-[#5C4033] text-[#F5F5DC] rounded-full flex items-center justify-center shadow-[0_4px_14px_0_rgb(92,64,51,0.39)] transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <Menu className="w-4 h-4" />
            </button>
          </div>

        </div>
      </header>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
}
