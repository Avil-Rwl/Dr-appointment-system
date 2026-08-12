import React, { useContext } from 'react';
import { assets } from '../assets/assets_admin/assets';
import { AdminContext } from '../context/AdminContext';
import { useNavigate } from 'react-router-dom';
import { LogOut, ShieldCheck, UserCheck } from 'lucide-react';

const Navbar = () => {
  const { aToken, setAToken } = useContext(AdminContext);
  const navigate = useNavigate();

  const logout = () => {
    navigate('/');
    if (aToken) {
      setAToken('');
      localStorage.removeItem('aToken');
    }
  };

  return (
    <header className="sticky top-0 left-0 right-0 w-full z-50 backdrop-blur-md bg-navbar-bg border-b border-medicalBorder shadow-[0_4px_24px_rgba(27,94,58,0.02)] transition-all duration-300">
      <div className="mx-auto px-4 sm:px-10 py-4 flex items-center justify-between">
        
        {/* Left Side: Upscaled Brand Identity Hub */}
        <div 
          onClick={() => navigate('/')} 
          className="flex items-center gap-4 cursor-pointer select-none group"
        >
          {/* IMPROVEMENT: Enlarged Logo Box Frame */}
          <div className="flex items-center justify-center p-2 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 shadow-sm">
            <img className="w-9 h-9 sm:w-10 sm:h-10 object-contain" src={assets.admin_logo} alt="Admin Logo" />
          </div>
          
          {/* IMPROVEMENT: Bigger Typography Layout Configuration */}
          <div className="flex flex-col gap-1">
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
              <p className="text-2xl sm:text-3xl font-black tracking-tight text-textPrimary leading-none">
                Citycare<span className="text-secondary font-light">Panel</span>
              </p>
              
              {/* Dynamic Account Role Identifier Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[11px] font-black uppercase tracking-widest w-fit shadow-xs">
                {aToken ? (
                  <>
                    <ShieldCheck className="w-3.5 h-3.5 text-secondary" />
                    <span>Admin</span>
                  </>
                ) : (
                  <>
                    <UserCheck className="w-3.5 h-3.5 text-accent" />
                    <span>Doctor</span>
                  </>
                )}
              </div>
            </div>

            {/* IMPROVEMENT: Thicker, bolder status design accent strand line */}
            <span className="h-1 w-20 rounded-full bg-gradient-to-r from-primary via-secondary to-accent opacity-85" />
          </div>
        </div>

        {/* Right Side: Operational Logout Trigger Button */}
        <div className="flex items-center gap-4">
          <button 
            onClick={logout} 
            className="group flex items-center gap-2 bg-primary hover:bg-primary-hover text-white text-sm font-bold px-6 py-3 rounded-xl shadow-[0_8px_20px_-4px_rgba(46,125,92,0.25)] hover:shadow-[0_12px_24px_-4px_rgba(46,125,92,0.4)] active:scale-97 transition-all duration-300 focus:outline-none"
          >
            <span>Logout</span>
            <LogOut className="w-4 h-4 opacity-90 transform group-hover:translate-x-0.5 transition-transform duration-200" />
          </button>
        </div>

      </div>
    </header>
  );
};

export default Navbar;