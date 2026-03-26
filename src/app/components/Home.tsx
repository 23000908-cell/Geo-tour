import { HeroVirtualTour } from "./HeroVirtualTour";
import { GisMapCard } from "./GisMapCard";
import { ResearchAbstract } from "./ResearchAbstract";
import { DigitalArchive } from "./DigitalArchive";
import { InfographicTiles } from "./InfographicTiles";
import { BookingSection } from "./BookingSection";

export function Home() {
  return (
    <div className="flex-1 w-full max-w-screen-2xl mx-auto px-6 py-8">
      <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-min gap-8">
        
        {/* Hero Virtual Tour */}
        <div className="col-span-1 md:col-span-9 h-[600px] rounded-[24px] overflow-hidden border border-[#5C4033]/15 shadow-[0_8px_30px_rgb(0,0,0,0.06)] bg-[#1B3022]/80 backdrop-blur-md relative group">
          <HeroVirtualTour />
        </div>
        
        {/* Research Abstract */}
        <div className="col-span-1 md:col-span-3 h-[600px] rounded-[24px] overflow-hidden border border-[#5C4033]/15 shadow-[0_8px_30px_rgb(0,0,0,0.06)] bg-[#F5F5DC]/80 backdrop-blur-md relative">
          <ResearchAbstract />
        </div>

        {/* GIS Map */}
        <div className="col-span-1 md:col-span-4 h-[450px] rounded-[24px] overflow-hidden border border-[#5C4033]/15 shadow-[0_8px_30px_rgb(0,0,0,0.06)] bg-[#F5F5DC]/80 backdrop-blur-md relative">
          <GisMapCard />
        </div>

        {/* Digital Archive */}
        <div className="col-span-1 md:col-span-8 h-[450px] rounded-[24px] overflow-hidden border border-[#5C4033]/15 shadow-[0_8px_30px_rgb(0,0,0,0.06)] bg-[#1B3022]/80 backdrop-blur-md relative">
          <DigitalArchive />
        </div>

        {/* Infographic Tiles */}
        <div className="col-span-1 md:col-span-12 rounded-[24px] overflow-hidden">
          <InfographicTiles />
        </div>

        {/* Booking Section */}
        <div className="col-span-1 md:col-span-12 mt-12 mb-8">
          <BookingSection />
        </div>
        
      </div>
    </div>
  );
}
