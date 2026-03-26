import { Clock, MapPin, ArrowRight } from "lucide-react";
import { useLang } from "../context/LangContext";

export function BookingSection() {
  const lang = useLang();

  const TOURS = [
    {
      id: 1,
      title: lang === 'vi' ? "Khám Phá Bình Minh Angkor Wat" : "Angkor Wat Sunrise Expedition",
      duration: lang === 'vi' ? "4 Giờ" : "4 Hours",
      price: "$45",
      img: "https://images.unsplash.com/photo-1693276206317-a78574082bfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmdrb3IlMjB3YXQlMjB0ZW1wbGV8ZW58MXx8fHwxNzc0NTMzMTQxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      location: lang === 'vi' ? "Siem Reap, Campuchia" : "Siem Reap, Cambodia"
    },
    {
      id: 2,
      title: lang === 'vi' ? "Pompeii Về Đêm: Chuyến Đi Bộ" : "Pompeii After Dark: A Guided Walk",
      duration: lang === 'vi' ? "2.5 Giờ" : "2.5 Hours",
      price: "$30",
      img: "https://images.unsplash.com/photo-1656073375498-7e138b433303?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb21wZWlpJTIwcnVpbnN8ZW58MXx8fHwxNzc0NTMzMTQxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      location: lang === 'vi' ? "Campania, Ý" : "Campania, Italy"
    },
    {
      id: 3,
      title: lang === 'vi' ? "Trekking Thành Cổ Machu Picchu" : "Machu Picchu Citadel Trek",
      duration: lang === 'vi' ? "6 Giờ" : "6 Hours",
      price: "$85",
      img: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNodSUyMHBpY2NodXxlbnwxfHx8fDE3NzQ1MzMxNDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      location: lang === 'vi' ? "Dãy Andes, Peru" : "Andes, Peru"
    }
  ];

  return (
    <div className="w-full flex flex-col gap-8">
      <div className="flex flex-col md:flex-row justify-between items-end gap-4">
        <div>
          <h2 className="font-serif text-4xl text-[#1B3022] mb-2">
            {lang === 'vi' ? 'Đặt Chỗ Trải Nghiệm Văn Hóa' : 'Cultural Experience Booking'}
          </h2>
          <p className="text-[#1B3022]/70 font-inter text-sm max-w-lg">
            {lang === 'vi' 
              ? 'Đảm bảo vị trí của bạn trong lịch sử. Đặt trước các chuyến tham quan đắm chìm được hướng dẫn bởi chuyên gia.'
              : 'Secure your place in history. Reserve expertly guided immersive tours across world-renowned heritage sites.'}
          </p>
        </div>
        <button className="flex items-center gap-2 text-sm font-semibold text-[#5C4033] hover:text-[#1B3022] transition-colors cursor-pointer group">
          {lang === 'vi' ? 'Xem Tất Cả Trải Nghiệm' : 'View All Experiences'}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TOURS.map((tour) => (
          <div 
            key={tour.id} 
            className="group relative flex flex-col bg-[#F5F5DC]/40 backdrop-blur-md border border-[#5C4033]/15 rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500"
          >
            {/* Image Container */}
            <div className="relative h-64 overflow-hidden">
              <img 
                src={tour.img} 
                alt={tour.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B3022]/80 to-transparent opacity-60" />
              
              <div className="absolute top-4 right-4 bg-[#F5F5DC]/90 backdrop-blur-sm text-[#1B3022] px-3 py-1.5 rounded-full text-xs font-bold shadow-md">
                {tour.price}
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1 relative bg-gradient-to-b from-white/40 to-white/10 backdrop-blur-md">
              <div className="flex items-center gap-1.5 text-xs font-medium text-[#5C4033] mb-3 uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5" />
                {tour.location}
              </div>
              
              <h3 className="font-serif text-2xl text-[#1B3022] leading-tight mb-4 flex-1">
                {tour.title}
              </h3>
              
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#1B3022]/10">
                <div className="flex items-center gap-2 text-sm text-[#1B3022]/70 font-medium">
                  <Clock className="w-4 h-4" />
                  {tour.duration}
                </div>
                <button className="px-6 py-2.5 bg-[#1B3022] hover:bg-[#5C4033] hover:shadow-[0_8px_20px_rgb(92,64,51,0.4)] text-[#F5F5DC] text-sm font-semibold rounded-full shadow-lg transition-all duration-300 transform group-hover:-translate-y-1 cursor-pointer">
                  {lang === 'vi' ? 'Đặt Ngay' : 'Book Now'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
