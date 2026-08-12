import React, { useContext, useState, useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { assets } from '../assets/assets_frontend/assets';
import { AppContext } from '../context/AppContext';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { token, setToken, userData } = useContext(AppContext);
  
  // Navigation & UI States
  const [showMenu, setShowMenu] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitor scroll adjustments to prevent layering bugs over headers
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Safe dropdown closer when switching views
  useEffect(() => {
    setServicesDropdown(false);
    setProfileDropdown(false);
    setShowMenu(false);
  }, [location]);

  const logout = () => {
    setToken(false);
    localStorage.removeItem('token');
  };

  const getInitials = (name) => {
    if (!name) return "?";
    return name.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2);
  };

  const medicalServices = [
    { name: "Cardiology", path: "/doctors/cardiology" },
    { name: "Neurology", path: "/doctors/neurology" },
    { name: "Pediatrics", path: "/doctors/pediatrics" },
    { name: "Dermatology", path: "/doctors/dermatology" },
    { name: "Orthopedics", path: "/doctors/orthopedics" },
  ];

  return (
    /* FIX: Changing from raw top positioning to sticky container rules. 
      This ensures that it stays visible without overlapping content awkwardly.
    */
    <div className="w-full flex justify-center sticky top-0 z-50 px-4 transition-all duration-300">
      <nav 
        className={`w-full max-w-7xl transition-all duration-300 ease-out flex flex-col
          ${isScrolled 
            ? "top-3 mt-3 rounded-2xl backdrop-blur-xl bg-navbar-bg border border-medicalBorder shadow-[0_12px_40px_rgba(27,94,58,0.06)] px-5 py-3" 
            : "top-0 mt-0 rounded-none border-b border-medicalBorder/40 bg-transparent px-4 py-5"
          }`}
      >
        <div className="flex items-center justify-between w-full">
          
          {/* Brand Identity Branding */}
          <div onClick={() => navigate('/')} className="flex items-center gap-2.5 cursor-pointer select-none">
            <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-primary/10">
              <img className="w-5 h-5" src={assets.logo} alt="Logo" />
            </div>
            <p className="text-lg font-black tracking-tight text-textPrimary sm:text-xl">
              Citycare<span className="text-secondary font-light">Hospital</span>
            </p>
          </div>

          {/* Desktop Links Viewport */}
          <div className="hidden md:flex items-center gap-8 text-[13px] font-bold text-textSecondary tracking-wide">
            <NavLink to='/' className={({ isActive }) => `hover:text-primary transition-colors py-1 relative group ${isActive ? 'text-primary' : ''}`}>
              HOME
              <span className={`absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-300 w-0 group-hover:w-full ${location.pathname === '/' ? 'w-full' : ''}`} />
            </NavLink>

            {/* Interactive Desktop Services Module */}
            <div className="relative">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setServicesDropdown(!servicesDropdown);
                  setProfileDropdown(false);
                }}
                className={`flex items-center gap-1 hover:text-primary transition-all py-1 font-bold focus:outline-none ${servicesDropdown ? 'text-primary' : ''}`}
              >
                SERVICES
                <img className={`w-2 h-2 opacity-70 transition-transform duration-300 ${servicesDropdown ? 'rotate-180' : ''}`} src={assets.dropdown_icon} alt="" />
              </button>

              {servicesDropdown && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setServicesDropdown(false)} />
                  <div className="absolute left-1/2 -translate-x-1/2 mt-3 w-56 rounded-2xl bg-card-bg border border-medicalBorder shadow-xl overflow-hidden p-1.5 z-20 animate-dropdownSlide">
                    {medicalServices.map((service, index) => (
                      <div
                        key={index}
                        onClick={() => navigate(service.path)}
                        className="block px-4 py-2.5 rounded-xl text-sm font-bold text-textSecondary hover:bg-hover-bg hover:text-primary transition-colors cursor-pointer"
                      >
                        {service.name}
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>

            <NavLink to='/doctors' className={({ isActive }) => `hover:text-primary transition-colors py-1 relative group ${isActive ? 'text-primary' : ''}`}>
              DOCTORS
              <span className={`absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-300 w-0 group-hover:w-full ${location.pathname.startsWith('/doctors') ? 'w-full' : ''}`} />
            </NavLink>

            <NavLink to='/about' className={({ isActive }) => `hover:text-primary transition-colors py-1 relative group ${isActive ? 'text-primary' : ''}`}>
              ABOUT
              <span className={`absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-300 w-0 group-hover:w-full ${location.pathname === '/about' ? 'w-full' : ''}`} />
            </NavLink>

            <NavLink to='/contact' className={({ isActive }) => `hover:text-primary transition-colors py-1 relative group ${isActive ? 'text-primary' : ''}`}>
              CONTACT US
              <span className={`absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-300 w-0 group-hover:w-full ${location.pathname === '/contact' ? 'w-full' : ''}`} />
            </NavLink>
          </div>

          {/* User Controls Interface Endcap */}
          <div className="flex items-center gap-4">
            {
              token && userData ? (
                <div className="relative">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setProfileDropdown(!profileDropdown);
                      setServicesDropdown(false);
                    }}
                    className="flex items-center gap-2 focus:outline-none bg-hover-bg p-1 pr-2.5 rounded-full transition-all duration-200"
                  >
                    {userData.image ? (
                      <img className="w-7 h-7 rounded-full object-cover border border-card-bg shadow-sm" src={userData.image} alt={userData.name} />
                    ) : (
                      <div className="w-7 h-7 flex items-center justify-center bg-gradient-to-br from-primary to-secondary text-white font-extrabold text-[10px] rounded-full shadow-sm">
                        {getInitials(userData.name)}
                      </div>
                    )}
                    <span className="hidden sm:block text-xs font-bold text-textSecondary max-w-[80px] truncate">{userData.name.split(' ')[0]}</span>
                    <img className={`w-2 opacity-50 transition-transform duration-300 ${profileDropdown ? 'rotate-180' : ''}`} src={assets.dropdown_icon} alt="" />
                  </button>

                  {profileDropdown && (
                    <>
                      <div className="fixed inset-0 z-10" onClick={() => setProfileDropdown(false)} />
                      <div className="absolute right-0 mt-3 w-52 rounded-2xl bg-card-bg border border-medicalBorder shadow-xl overflow-hidden p-1.5 text-xs font-bold text-textSecondary z-20 animate-dropdownSlide">
                        <div className="px-3 py-2 mb-1 bg-hover-bg rounded-xl">
                          <p className="text-[9px] uppercase tracking-wider text-textMuted">Signed In As</p>
                          <p className="text-sm font-black text-textPrimary truncate mt-0.5">{userData.name}</p>
                        </div>
                        <p onClick={() => navigate('/my-profile')} className="px-3 py-2.5 rounded-xl hover:bg-hover-bg hover:text-primary cursor-pointer transition-colors">My Profile</p>
                        <p onClick={() => navigate('/my-appointments')} className="px-3 py-2.5 rounded-xl hover:bg-hover-bg hover:text-primary cursor-pointer transition-colors">My Appointments</p>
                        <hr className="border-medicalBorder my-1" />
                        <p onClick={logout} className="px-3 py-2.5 rounded-xl hover:bg-destructive/10 text-destructive font-black cursor-pointer transition-colors">Logout</p>
                      </div>
                    </>
                  )}
                </div>
              ) : (
                <button 
                  onClick={() => navigate('/login')} 
                  className="bg-primary hover:bg-primary-hover text-white text-xs font-bold px-5 py-2.5 rounded-full transition-all hidden md:block"
                >
                  Create Account
                </button>
              )
            }

            {/* FIXED Mobile Hamburger Trigger Element */}
            <button 
              onClick={() => setShowMenu(true)} 
              className="md:hidden flex items-center justify-center p-2 rounded-xl bg-hover-bg hover:bg-hover-bg/30 transition-all focus:outline-none"
            >
              <img className="w-5 h-5 filter text-textPrimary" src={assets.menu_icon} alt="Open Menu" />
            </button>
          </div>

          {/* ---------- FIXED & HIGHLY RESPONSIVE MOBILE PANEL OVERLAY ---------- */}
          <div className={`fixed inset-0 z-50 bg-textPrimary/40 backdrop-blur-xs transition-opacity duration-300 md:hidden ${showMenu ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
            <div className={`absolute top-0 right-0 bottom-0 w-full sm:w-80 bg-card-bg flex flex-col transition-transform duration-300 ease-out p-6 shadow-2xl ${showMenu ? 'translate-x-0' : 'translate-x-full'}`}>
              
              {/* Mobile Drawer Topcap Header bar */}
              <div className="flex items-center justify-between pb-5 border-b border-medicalBorder">
                <div className="flex items-center gap-2">
                  <img className="w-7 h-7" src={assets.logo} alt="Logo" />
                  <span className="font-black text-base text-textPrimary">Citycare</span>
                </div>
                <button 
                  onClick={() => setShowMenu(false)} 
                  className="p-2 rounded-xl bg-hover-bg hover:bg-hover-bg/20 transition-all focus:outline-none"
                >
                  <img className="w-3.5 h-3.5" src={assets.cross_icon} alt="Close Menu" />
                </button>
              </div>

              {/* Mobile Hyperlinks List Container Stack */}
              <ul className="flex flex-col gap-1 mt-6 text-sm font-bold text-textSecondary overflow-y-auto flex-grow">
                {/* FIXED: Explicit Mobile HOME link container presence routing rule assignment */}
                <NavLink to='/' className={({ isActive }) => `p-3.5 rounded-xl transition-all ${isActive ? 'bg-primary/10 text-primary font-black' : 'hover:bg-hover-bg'}`}>
                  HOME
                </NavLink>
                <NavLink to='/doctors' className={({ isActive }) => `p-3.5 rounded-xl transition-all ${isActive ? 'bg-primary/10 text-primary font-black' : 'hover:bg-hover-bg'}`}>
                  DOCTORS
                </NavLink>
                <NavLink to='/about' className={({ isActive }) => `p-3.5 rounded-xl transition-all ${isActive ? 'bg-primary/10 text-primary font-black' : 'hover:bg-hover-bg'}`}>
                  ABOUT
                </NavLink>
                <NavLink to='/contact' className={({ isActive }) => `p-3.5 rounded-xl transition-all ${isActive ? 'bg-primary/10 text-primary font-black' : 'hover:bg-hover-bg'}`}>
                  CONTACT US
                </NavLink>
                
                {/* Expandable Services Grouping inside drawer box map listings */}
                <div className="mt-3 pt-4 border-t border-medicalBorder">
                  <p className="text-[10px] font-black text-textMuted tracking-widest uppercase px-3.5 mb-2">Our Specialties</p>
                  <div className="space-y-0.5 px-1 max-h-48 overflow-y-auto">
                    {medicalServices.map((service, index) => (
                      <p 
                        key={index} 
                        onClick={() => navigate(service.path)} 
                        className="text-xs font-bold text-textSecondary hover:text-primary py-2.5 px-3.5 rounded-xl hover:bg-hover-bg bg-black-colors cursor-pointer"
                      >
                        {service.name}
                      </p>
                    ))}
                  </div>
                </div>
              </ul>

              {/* Conditional Account Creator access handle on mobile inside footer overlay tray */}
              {(!token || !userData) && (
                <button 
                  onClick={() => navigate('/login')} 
                  className="mt-4 w-full bg-primary text-white font-bold py-3.5 rounded-xl shadow-md active:scale-98 transition-all text-sm"
                >
                  Create Account
                </button>
              )}
            </div>
          </div>

        </div>
      </nav>
    </div>
  );
};

export default Navbar;