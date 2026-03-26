import { 
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, 
  LineChart, Line, AreaChart, Area
} from 'recharts';
import { Users, Eye, ArrowUpRight } from "lucide-react";
import { useLang } from "../context/LangContext";

const visitData = [
  { name: 'Jan', value: 4000 }, { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 5000 }, { name: 'Apr', value: 8780 },
  { name: 'May', value: 5890 }, { name: 'Jun', value: 9390 },
];

const demographicData = [
  { age: '18-24', pct: 20 }, { age: '25-34', pct: 45 },
  { age: '35-44', pct: 25 }, { age: '45+', pct: 10 },
];

export function InfographicTiles() {
  const lang = useLang();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
      {/* Tile 1: Total Virtual Visitors */}
      <div className="bg-[#F5F5DC]/80 backdrop-blur-xl rounded-[24px] p-8 border border-[#5C4033]/15 shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex flex-col hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-shadow duration-300">
        <div className="flex justify-between items-start mb-8">
          <div>
            <p className="text-[11px] font-bold tracking-widest uppercase font-inter text-[#5C4033] mb-2">
              {lang === 'vi' ? 'Khách Tham Quan Ảo' : 'Virtual Visitors'}
            </p>
            <h4 className="font-serif text-4xl text-[#1B3022]">42,591</h4>
          </div>
          <div className="w-12 h-12 rounded-[16px] bg-[#1B3022]/10 text-[#1B3022] flex items-center justify-center shadow-sm">
            <Users className="w-6 h-6" />
          </div>
        </div>
        <div className="h-36 w-full mt-auto">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={visitData}>
               <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#5C4033" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="#5C4033" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <Tooltip 
                contentStyle={{ backgroundColor: '#1B3022', border: 'none', borderRadius: '12px', color: '#F5F5DC', fontFamily: 'Inter', fontSize: '12px', boxShadow: '0 8px 30px rgba(0,0,0,0.2)' }} 
                itemStyle={{ color: '#F5F5DC' }}
              />
              <Area type="monotone" dataKey="value" stroke="#5C4033" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Tile 2: Engagement Time */}
      <div className="bg-[#1B3022] rounded-[24px] p-8 border border-[#F5F5DC]/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex flex-col text-[#F5F5DC] relative overflow-hidden hover:shadow-[0_20px_40px_rgb(0,0,0,0.2)] transition-shadow duration-300">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#F5F5DC]/5 rounded-full blur-2xl pointer-events-none" />
        <div className="flex justify-between items-start mb-8 relative z-10">
          <div>
            <p className="text-[11px] font-bold tracking-widest uppercase font-inter text-[#F5F5DC]/60 mb-2">
              {lang === 'vi' ? 'Thời Gian Tương Tác' : 'Avg. Engagement'}
            </p>
            <h4 className="font-serif text-4xl">24m 15s</h4>
          </div>
          <div className="w-12 h-12 rounded-[16px] bg-[#F5F5DC]/10 text-[#F5F5DC] flex items-center justify-center shadow-sm backdrop-blur-sm">
            <Eye className="w-6 h-6" />
          </div>
        </div>
        <div className="h-36 w-full mt-auto relative z-10">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={visitData}>
              <Tooltip 
                contentStyle={{ backgroundColor: '#F5F5DC', border: 'none', borderRadius: '12px', color: '#1B3022', fontFamily: 'Inter', fontSize: '12px', boxShadow: '0 8px 30px rgba(0,0,0,0.2)' }}
                itemStyle={{ color: '#1B3022' }}
              />
              <Line type="step" dataKey="value" stroke="#F5F5DC" strokeWidth={3} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Tile 3: Demographics Breakdown */}
      <div className="bg-gradient-to-br from-[#5C4033] to-[#4A3329] rounded-[24px] p-8 border border-[#1B3022]/15 shadow-[0_8px_30px_rgb(92,64,51,0.3)] flex flex-col text-[#F5F5DC] hover:shadow-[0_20px_40px_rgb(92,64,51,0.4)] transition-shadow duration-300">
         <div className="flex justify-between items-start mb-6">
          <div>
            <p className="text-[11px] font-bold tracking-widest uppercase font-inter text-[#F5F5DC]/70 mb-2">
              {lang === 'vi' ? 'Nhân Khẩu Học' : 'Demographics'}
            </p>
            <h4 className="font-serif text-3xl">
              {lang === 'vi' ? 'Phân Bố Độ Tuổi' : 'Age Distribution'}
            </h4>
          </div>
          <div className="w-10 h-10 rounded-full bg-[#1B3022]/20 flex items-center justify-center backdrop-blur-sm shadow-sm hover:scale-110 transition-transform cursor-pointer">
            <ArrowUpRight className="w-5 h-5 text-[#F5F5DC]/90" />
          </div>
        </div>
        <div className="h-40 w-full mt-auto">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={demographicData} layout="vertical" margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
              <XAxis type="number" hide />
              <YAxis dataKey="age" type="category" axisLine={false} tickLine={false} tick={{ fill: '#F5F5DC', fontSize: 13, fontFamily: 'Inter', fontWeight: 500 }} />
              <Tooltip 
                 cursor={{ fill: 'rgba(245,245,220,0.1)', radius: 8 }}
                 contentStyle={{ backgroundColor: '#1B3022', border: 'none', borderRadius: '12px', color: '#F5F5DC', fontFamily: 'Inter', fontSize: '12px', boxShadow: '0 8px 30px rgba(0,0,0,0.2)' }}
                 itemStyle={{ color: '#F5F5DC' }}
              />
              <Bar dataKey="pct" fill="#F5F5DC" radius={[0, 6, 6, 0]} barSize={20} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  );
}
