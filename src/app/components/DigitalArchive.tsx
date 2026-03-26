import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Search, ChevronRight } from "lucide-react";
import { useLang } from "../context/LangContext";

export function DigitalArchive() {
  const lang = useLang();

  const ARTIFACTS = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1773633493389-c456a3b212db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwcG90dGVyeSUyMGFydGlmYWN0JTIwbXVzZXVtfGVufDF8fHx8MTc3NDUzMjIyOHww&ixlib=rb-4.1.0&q=80&w=1080",
      title: lang === 'vi' ? "Bình Gốm Terracotta" : "Terracotta Amphora",
      era: "c. 450 BCE"
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1566567270170-15f6d4d53a9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwc3RhdHVlJTIwYnVzdCUyMG11c2V1bXxlbnwxfHx8fDE3NzQ1MzIyMjh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: lang === 'vi' ? "Tượng Bán Thân Cẩm Thạch" : "Marble Bust",
      era: "c. 120 CE"
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1763225271111-dd9363584249?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwc2NyaXB0JTIwZG9jdW1lbnR8ZW58MXx8fHwxNzc0NTMyMjMzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: lang === 'vi' ? "Bản Thảo Cổ" : "Illuminated Manuscript",
      era: "c. 1100 CE"
    }
  ];

  return (
    <div className="w-full h-full flex flex-col bg-[#1B3022] text-[#F5F5DC] p-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#5C4033]/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="flex justify-between items-center mb-8 relative z-10 flex-wrap gap-4">
        <div>
          <h3 className="font-serif text-3xl mb-1">
            {lang === 'vi' ? 'Lưu Trữ Số' : 'Digital Archive'}
          </h3>
          <p className="text-[#F5F5DC]/60 font-inter text-sm">
            {lang === 'vi' ? 'Bộ sưu tập hiện vật độ phân giải cao' : 'Curated selection of high-res artifacts'}
          </p>
        </div>
        <div className="flex gap-3">
          <div className="relative group/search">
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-[#F5F5DC]/40 group-focus-within/search:text-[#5C4033] transition-colors" />
            <input 
              type="text" 
              placeholder={lang === 'vi' ? 'Tìm kiếm...' : 'Search...'}
              className="bg-[#F5F5DC]/5 border border-[#F5F5DC]/15 rounded-full pl-10 pr-5 py-2 text-sm font-inter text-[#F5F5DC] focus:outline-none focus:border-[#5C4033]/80 w-48 md:w-64 transition-all focus:bg-[#F5F5DC]/10 shadow-[0_4px_20px_rgb(0,0,0,0.1)] backdrop-blur-md"
            />
          </div>
          <button className="bg-[#5C4033] hover:bg-[#F5F5DC] hover:text-[#1B3022] text-[#F5F5DC] rounded-full w-10 h-10 shadow-[0_8px_30px_rgb(92,64,51,0.4)] transition-all flex items-center justify-center cursor-pointer hover:scale-105">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pr-3 custom-scrollbar relative z-10">
        <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
          <Masonry gutter="20px">
            {ARTIFACTS.map((item) => (
              <div key={item.id} className="relative group rounded-[20px] overflow-hidden border border-[#F5F5DC]/10 bg-[#F5F5DC]/5 cursor-pointer shadow-lg hover:shadow-[0_8px_30px_rgb(0,0,0,0.4)] transition-all duration-500">
                <img src={item.img} alt={item.title} className="w-full h-auto object-cover transform transition-transform duration-[800ms] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B3022]/90 via-[#1B3022]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 backdrop-blur-[2px]">
                  <h4 className="font-serif text-lg font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">{item.title}</h4>
                  <p className="font-inter text-xs text-[#F5F5DC]/80 mt-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out delay-75">{item.era}</p>
                </div>
              </div>
            ))}
            {/* Call to action block within masonry */}
             <div className="relative group rounded-[20px] overflow-hidden border border-[#F5F5DC]/15 bg-[#5C4033]/20 backdrop-blur-md cursor-pointer flex items-center justify-center aspect-[4/3] hover:bg-[#5C4033]/40 transition-colors shadow-lg">
                <span className="text-xs font-bold tracking-widest uppercase text-[#F5F5DC]/60 font-inter group-hover:text-[#F5F5DC] transition-colors group-hover:scale-105 transform duration-300">
                  {lang === 'vi' ? 'Khám Phá 10k+ Hiện Vật' : 'Explore 10k+ Items'}
                </span>
            </div>
          </Masonry>
        </ResponsiveMasonry>
      </div>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(245, 245, 220, 0.05);
          border-radius: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(245, 245, 220, 0.15);
          border-radius: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(245, 245, 220, 0.3);
        }
      `}</style>
    </div>
  );
}
