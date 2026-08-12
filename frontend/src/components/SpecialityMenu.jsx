import React from 'react';
import { specialityData } from '../assets/assets_frontend/assets';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

const SpecialityMenu = () => {
  const handleCardClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div 
      className="flex flex-col items-center justify-center gap-4 py-20 px-4 max-w-7xl mx-auto border-b border-medicalBorder/50" 
      id="speciality"
    >
      {/* Micro-pill section badge */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-wider uppercase mb-2">
        <Sparkles className="w-3.5 h-3.5 text-secondary" />
        <span>Medical Expertise</span>
      </div>

      {/* Main Headers */}
<h1 className="text-3xl sm:text-4xl font-black text-textPrimary tracking-tight text-center flex flex-col items-center gap-2">
  <span>
    Find by <span className="text-primary font-extrabold relative">Specialty</span>
  </span>
  
  {/* A premium, sleek accent pill underline indicator instead of a tricky text gradient */}
  <span className="h-1.5 w-16 rounded-full bg-primary mt-1 block" />
</h1>
      
      <p className="max-w-md text-center text-sm font-medium text-textSecondary leading-relaxed">
        Simply browse through our extensive list of trusted doctors, and schedule your appointment hassle-free.
      </p>

      {/* Specialty Cards Scroll Container */}
      <div className="flex items-center justify-center gap-6 pt-10 w-full overflow-x-auto no-scrollbar pb-6 scroll-smooth snap-x">
        {specialityData.map((item, index) => (
          <Link 
            key={index}
            onClick={handleCardClick} 
            to={`/doctors/${item.speciality}`}
            className="group flex flex-col items-center text-center p-5 rounded-2xl bg-surface border border-medicalBorder shadow-[0px_4px_20px_rgba(0,0,0,0.08)] hover:border-primary/30 hover:shadow-[0_20px_40px_rgba(37,99,235,0.08)] hover:-translate-y-2 transition-all duration-300 ease-out flex-shrink-0 min-w-[130px] sm:min-w-[160px] snap-center cursor-pointer select-none"
          >
            {/* Image Frame with internal zoom and ambient back-glow */}
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-background flex items-center justify-center overflow-hidden mb-4 transition-colors group-hover:bg-primary/5">
              <img 
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain filter transition-transform duration-500 group-hover:scale-110" 
                src={item.image} 
                alt={`${item.speciality} Icon`} 
              />
            </div>

            {/* Specialty Label text */}
            <p className="text-xs sm:text-sm font-bold text-textPrimary group-hover:text-primary transition-colors tracking-wide">
              {item.speciality}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;