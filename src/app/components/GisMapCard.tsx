import { Map as MapIcon, Layers, Filter } from "lucide-react";
import { useLang } from "../context/LangContext";

export function GisMapCard() {
  const lang = useLang();

  return (
    <div className="relative w-full h-full group overflow-hidden flex flex-col rounded-[24px]">
      {/* Background Map Image (mocking a GIS map) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1736117703416-f260ee174bac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3BvZ3JhcGhpYyUyMG1hcCUyMGdpc3xlbnwxfHx8fDE3NzQ1MzIyMjh8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="GIS Map"
          className="w-full h-full object-cover opacity-80 mix-blend-multiply filter sepia-[0.4] contrast-125 transition-transform duration-[10s] group-hover:scale-110"
        />
        {/* Spatial Data Clusters overlay mock */}
        <div className="absolute top-[30%] left-[40%] w-32 h-32 bg-[#5C4033]/15 rounded-full animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite] border border-[#5C4033]/50 pointer-events-none" />
        <div className="absolute top-[35%] left-[45%] w-5 h-5 bg-[#5C4033] rounded-full shadow-[0_0_20px_rgba(92,64,51,0.9)] border-2 border-[#F5F5DC]/40 pointer-events-none" />

        <div className="absolute top-[60%] left-[20%] w-24 h-24 bg-[#1B3022]/15 rounded-full animate-[ping_5s_cubic-bezier(0,0,0.2,1)_infinite] border border-[#1B3022]/50 delay-700 pointer-events-none" />
        <div className="absolute top-[62%] left-[23%] w-4 h-4 bg-[#1B3022] rounded-full shadow-[0_0_20px_rgba(27,48,34,0.9)] border-2 border-[#F5F5DC]/40 pointer-events-none" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-[#F5F5DC]/30 to-transparent pointer-events-none z-0" />

      <div className="relative z-10 flex flex-col h-full p-6 justify-between pointer-events-none">
        <div className="flex justify-between items-start">
          <div className="bg-[#F5F5DC]/80 backdrop-blur-xl px-4 py-2 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-[#5C4033]/10 flex items-center gap-2 pointer-events-auto">
            <MapIcon className="w-4 h-4 text-[#5C4033]" />
            <span className="text-[11px] font-bold tracking-widest text-[#1B3022] font-inter uppercase">
              {lang === 'vi' ? 'Dữ Liệu Không Gian' : 'Spatial Data'}
            </span>
          </div>
          <div className="flex flex-col gap-3 pointer-events-auto">
            <button className="w-10 h-10 bg-[#F5F5DC]/80 hover:bg-[#5C4033] hover:text-[#F5F5DC] backdrop-blur-xl rounded-[12px] flex items-center justify-center border border-[#5C4033]/10 text-[#1B3022] shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 hover:scale-105 cursor-pointer">
              <Layers className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 bg-[#F5F5DC]/80 hover:bg-[#5C4033] hover:text-[#F5F5DC] backdrop-blur-xl rounded-[12px] flex items-center justify-center border border-[#5C4033]/10 text-[#1B3022] shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 hover:scale-105 cursor-pointer">
              <Filter className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="bg-[#F5F5DC]/85 backdrop-blur-xl p-5 rounded-[20px] border border-[#F5F5DC]/50 pointer-events-auto shadow-[0_8px_30px_rgb(0,0,0,0.1)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.15)] transition-shadow duration-300">
          <h4 className="font-serif text-[#1B3022] text-lg font-medium mb-1.5">
            {lang === 'vi' ? 'Cụm Khu Vực 4' : 'Region 4 Cluster'}
          </h4>
          <p className="text-[#1B3022]/70 font-inter text-xs leading-relaxed">
            {lang === 'vi' 
              ? 'Mật độ cao của các hiện vật thời kỳ Đồ đá mới được phát hiện. 42 lưới khai quật đang hoạt động trên một vector 15km².'
              : 'High density of Neolithic artifacts discovered. 42 active excavation grids across a 15km² vector.'}
          </p>
        </div>
      </div>
    </div>
  );
}
