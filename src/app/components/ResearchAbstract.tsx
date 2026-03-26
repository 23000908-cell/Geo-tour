import { BookMarked, ArrowUpRight } from "lucide-react";
import { useLang } from "../context/LangContext";

export function ResearchAbstract() {
  const lang = useLang();

  return (
    <div className="w-full h-full flex flex-col p-10 bg-gradient-to-br from-[#F5F5DC] to-[#F5F5DC]/80 relative overflow-hidden group/abstract">
      <div className="absolute top-0 right-0 w-48 h-48 bg-[#5C4033]/5 rounded-bl-[150px] pointer-events-none transition-transform duration-700 group-hover/abstract:scale-110" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#1B3022]/5 rounded-tr-[200px] pointer-events-none transition-transform duration-700 group-hover/abstract:scale-110" />
      
      <div className="flex items-center gap-3 mb-10 z-10">
        <div className="w-10 h-10 rounded-[12px] bg-[#5C4033]/10 text-[#5C4033] flex items-center justify-center shadow-sm">
          <BookMarked className="w-5 h-5" />
        </div>
        <span className="text-xs font-bold tracking-widest uppercase text-[#5C4033] font-inter">
          {lang === 'vi' ? 'Tóm Tắt Nổi Bật' : 'Featured Abstract'}
        </span>
      </div>

      <div className="flex-1 flex flex-col justify-center z-10">
        <h3 className="font-serif text-4xl leading-[1.15] text-[#1B3022] mb-8">
          {lang === 'vi' 
            ? 'Tác động Kinh tế - Xã hội của Hình ảnh hóa Di sản'
            : 'The Socio-Economic Impact of Digital Heritage Visualization'}
        </h3>
        
        <div className="w-16 h-[3px] bg-[#5C4033] mb-8 transition-all duration-500 group-hover/abstract:w-24" />
        
        <p className="text-[#1B3022]/80 font-inter text-sm leading-[1.8] mb-8">
          {lang === 'vi'
            ? 'Bằng cách tích hợp bản đồ không gian với tái tạo ảo đắm chìm, nghiên cứu dọc này đánh giá khả năng duy trì nhận thức và sự tham gia từ thiện gia tăng...'
            : 'By integrating spatial mapping with immersive virtual reconstructions, this longitudinal study evaluates the cognitive retention and increased philanthropic engagement...'}
        </p>

        <p className="text-[#1B3022]/60 font-serif italic text-sm mb-10">
          {lang === 'vi' ? 'Xuất bản: Q1 2026, Tạp chí Cổ đại Tương tác' : 'Published: Q1 2026, Journal of Interactive Antiquity'}
        </p>
      </div>

      <button className="mt-auto flex items-center justify-between w-full py-5 border-t border-[#5C4033]/15 group cursor-pointer z-10 hover:border-[#5C4033]/40 transition-colors">
        <span className="text-sm font-semibold text-[#1B3022] font-inter group-hover:text-[#5C4033] transition-colors">
          {lang === 'vi' ? 'Đọc Toàn Bộ Bài Báo' : 'Read Full Paper'}
        </span>
        <div className="w-8 h-8 rounded-full bg-[#1B3022]/5 flex items-center justify-center group-hover:bg-[#5C4033] transition-colors duration-300">
          <ArrowUpRight className="w-4 h-4 text-[#1B3022] group-hover:text-[#F5F5DC] transition-colors" />
        </div>
      </button>
    </div>
  );
}
