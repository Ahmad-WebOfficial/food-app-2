import React, { useState } from "react";
import { ShoppingCart, User, Menu, X, UserPlus, MapPin } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logos.jpeg";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="w-full bg-[#004B3E] text-white sticky top-0 z-50 shadow-2xl border-b border-white/10 transition-all duration-300">
      <div className="w-full px-4 md:px-6 h-20 flex items-center justify-between relative max-w-[1440px] mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2 cursor-pointer group z-10 transition-transform active:scale-95"
        >
          {/* Logo Container: Yahan 'mix-blend-mode' lagaya hai taake orange color background ke sath merge ho jaye */}
          <div className="relative overflow-hidden rounded-lg w-14 h-14 flex items-center justify-center bg-[#D44A1C]">
            <img
              src={logo}
              alt="Delight Crust Logo"
              className="w-full h-full transition-all duration-500 group-hover:rotate-[360deg] object-cover"
            />
          </div>
          <h1 className="text-yellow-500 font-black text-xl uppercase italic tracking-tighter select-none">
            Zesty
            <span className="text-white group-hover:text-yellow-200 transition-colors">
              Bites
            </span>
          </h1>
        </Link>

        {/* ... baqi code same rahega ... */}
        <nav className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-[13px] font-bold uppercase tracking-widest transition-all duration-300 relative py-2 group cursor-pointer ${
                  isActive ? "text-yellow-400" : "text-gray-200 hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 h-[3px] bg-yellow-500 transition-all duration-500 rounded-full ${
                      isActive ? "w-full opacity-100 shadow-[0_0_8px_#EAB308]" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-50"
                    }`}
                  ></span>
                </>
              )}
            </NavLink>
          ))}
          <button className="flex items-center gap-2 bg-yellow-500 text-black px-5 py-2 rounded-full font-black text-[11px] uppercase transition-all duration-300 hover:bg-white hover:scale-110 active:scale-90 shadow-lg shadow-black/20 cursor-pointer">
            <MapPin size={14} strokeWidth={3} />
            Your Location
          </button>
        </nav>

        <div className="flex items-center gap-4 z-10">
          <div className="hidden sm:flex items-center gap-3 border-r border-white/20 pr-5">
            <Link to="/login" className="flex items-center gap-1.5 text-[13px] font-black hover:text-yellow-400 transition-all cursor-pointer active:scale-95 uppercase">
              <User size={18} /> Login
            </Link>
            <Link to="/signup" className="bg-yellow-500 text-black flex items-center gap-2 text-[12px] font-black px-5 py-2 rounded-lg transition-all duration-300 hover:bg-white hover:-translate-y-1 active:translate-y-0 shadow-lg cursor-pointer uppercase">
              <UserPlus size={18} /> Signup
            </Link>
          </div>

          <Link to="/cart" className="relative group cursor-pointer ml-1">
            <div className="bg-yellow-500 p-2.5 rounded-full text-black transition-all duration-500 group-hover:bg-white group-hover:-rotate-12 group-hover:scale-110 shadow-xl active:scale-90">
              <ShoppingCart size={22} />
            </div>
            <span className="absolute -top-1.5 -right-1.5 bg-black text-yellow-500 text-[11px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#004B3E] shadow-lg animate-pulse">
              0
            </span>
          </Link>

          <button className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-all active:scale-90 cursor-pointer" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </div>
      
      {/* Mobile Menu logic same as before */}
    </header>
  );
};

export default Header;