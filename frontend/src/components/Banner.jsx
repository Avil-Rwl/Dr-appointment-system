import React from 'react';
import { assets } from '../assets/assets_frontend/assets';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

const Banner = () => {
  const navigate = useNavigate();

  const handleActionClick = () => {
    navigate('/login');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative mx-4 my-24 md:mx-10 max-w-7xl lg:mx-auto overflow-hidden rounded-3xl bg-card-bg border border-medicalBorder px-6 py-12 sm:px-12 md:px-16 lg:px-20 shadow-[0_20px_50px_rgba(27,94,92,0.04)]">
      
      {/* Modern Background Blur Nodes */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -left-16 -top-16 h-72 w-72 rounded-full bg-primary/10 blur-[100px]" />
        <div className="absolute -right-20 -bottom-20 h-96 w-96 rounded-full bg-accent/15 blur-[130px]" />
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#2e7d5c_1px,transparent_1px),linear-gradient(to_bottom,#2e7d5c_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 w-full">
        
        {/* Left Column Content */}
        <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start max-w-xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-wider uppercase mb-6 animate-pulse">
            <Sparkles className="w-3.5 h-3.5 text-secondary" />
            <span>Top Rated Medical Network</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-textPrimary tracking-tight leading-[1.15]">
            Book Your Next <br />
            <span className="text-primary font-black relative">Appointment</span> 
            <span className="block text-xl sm:text-2xl font-medium text-textSecondary mt-4 tracking-normal">
              With 100+ Trusted Healthcare Providers
            </span>
          </h2>

          <button 
            onClick={handleActionClick} 
            className="group flex items-center gap-2 bg-primary hover:bg-primary-hover text-white text-sm font-bold px-8 py-4 rounded-2xl shadow-[0_12px_24px_-6px_rgba(46,125,92,0.3)] hover:shadow-[0_20px_32px_-6px_rgba(46,125,92,0.5)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 mt-8"
          >
            <span>Get Started Now</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>

        {/* Right Graphic Frame */}
        <div className="w-full md:w-[45%] lg:w-[400px] flex justify-center md:justify-end relative self-end mt-6 md:mt-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-tr from-primary/20 to-accent/10 blur-3xl z-0" />
          <div className="relative z-10 w-4/5 sm:w-2/3 md:w-full">
            <img 
              className="w-full h-auto object-cover filter drop-shadow-[0_15px_25px_rgba(27,94,58,0.1)] transform hover:scale-[1.01] transition-transform duration-500" 
              src={assets.appointment_img} 
              alt="Medical Team Representation" 
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Banner;