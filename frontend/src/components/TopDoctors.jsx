import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const TopDoctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col items-center gap-4 py-24 px-4 max-w-7xl mx-auto" id="doctors">
      
      {/* ---------- Header System ---------- */}
      <div className="flex flex-col items-center gap-2 text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-black text-textPrimary tracking-tight">
          Top Doctors to <span className="text-primary">Book</span>
        </h2>
        <span className="h-1.5 w-12 rounded-full bg-gradient-to-r from-primary to-secondary mt-1" />
        <p className="max-w-md text-sm font-medium text-textSecondary mt-2 leading-relaxed">
          Simply browse through our extensive list of trusted doctors and find the right specialist.
        </p>
      </div>

      {/* ---------- Professional Responsive Grid ---------- */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-4">
        {doctors?.slice(0, 10).map((item, index) => (
          <div 
            key={index}
            onClick={() => handleNavigation(`/appointment/${item._id}`)} 
            className="group relative flex flex-col justify-between bg-surface border border-medicalBorder rounded-2xl overflow-hidden cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:border-primary/20 hover:shadow-[0_20px_45px_rgba(37,99,235,0.06)] hover:-translate-y-2 transition-all duration-300 ease-out"
          >
            {/* Image Containment Layer */}
            <div className="relative w-full aspect-[5/5] bg-background overflow-hidden border-b border-medicalBorder/40">
              <img 
                className="w-full h-full object-cover object-top filter grayscale-[10%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-[1.03]" 
                src={item.image} 
                alt={item.name} 
              />
              
              {/* Sleek Floating Availability Micro-Badge */}
              <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full backdrop-blur-md bg-white/90 border border-emerald-200/50 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                <span className="text-[11px] font-bold tracking-wide text-emerald-700 uppercase">Available</span>
              </div>
            </div>

            {/* Profile Content Base */}
            <div className="p-4 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-base font-bold text-textPrimary group-hover:text-primary transition-colors tracking-tight line-clamp-1">
                  {item.name}
                </h3>
                <p className="text-xs font-semibold text-textSecondary mt-0.5 tracking-wide">
                  {item.speciality}
                </p>
              </div>

              {/* Action Link Row */}
              <div className="flex items-center gap-1 text-xs font-bold text-primary mt-4 pt-3 border-t border-medicalBorder/30 group-hover:gap-2 transition-all">
                <span>Book Appointment</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ---------- Modern View All Trigger ---------- */}
      <button 
        onClick={() => handleNavigation('/doctors')} 
        className="group relative flex items-center gap-2 text-sm font-bold text-gray-700 hover:text-primary py-2.5 px-6 mt-12 focus:outline-none transition-colors"
      >
        <span>View More Providers</span>
        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" />
        
        {/* Underline styling trace block */}
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-primary transition-all duration-300 w-0 group-hover:w-full" />
      </button>

    </div>
  );
};

export default TopDoctors;