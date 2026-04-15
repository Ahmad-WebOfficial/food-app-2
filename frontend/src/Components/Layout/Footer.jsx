import React from "react";

const Footer = () => {
  const brandGreen = "#A5D03D";

  const menuButtons = [
    { name: "Pizzas", icon: "🍕" },
    { name: "Burgers", icon: "🍔" },
    { name: "Sandwich", icon: "🥪" },
    { name: "Fries", icon: "🍟" },
    { name: "Pastas", icon: "🍝" },
    { name: "Local Treats ", icon: "🌯" },
    { name: "Crust $ Rolls", icon: "🍕" },
  ];

  return (
    <footer className="bg-[#D44A1C] w-full text-white pt-12 pb-6 px-6 md:px-16 font-sans">
      <div className="max-w-[1200px] mx-auto">
        {/* 1. Main Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10 border-b border-white/20 pb-10">
          {/* Column 1: Brand */}
          <div className="space-y-4 text-center sm:text-left">
            <h2 className="text-3xl font-black uppercase italic tracking-tighter">
              <span style={{ color: brandGreen }}>Delight</span>{" "}
              <span className="text-white">Crust</span>
            </h2>
            <p className="text-white text-sm font-semibold leading-relaxed opacity-90">
              The premium fast food experience. Fresh ingredients and late-night
              service in your city.
            </p>
            <div className="flex justify-center sm:justify-start gap-4 pt-2">
              <a href="#" className="hover:scale-110 transition-transform">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  f
                </div>
              </a>
              <a href="#" className="hover:scale-110 transition-transform">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  x
                </div>
              </a>
              <a href="#" className="hover:scale-110 transition-transform">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  ig
                </div>
              </a>
            </div>
          </div>

          <div className="space-y-4 text-center sm:text-left">
            <h4 className="font-bold uppercase tracking-widest text-sm border-b border-white/10 text-black pb-2 inline-block sm:block">
              Categories
            </h4>
            <div className="grid grid-cols-1 gap-2">
              {menuButtons.map((btn) => (
                <button
                  key={btn.name}
                  className="flex items-center cursor-pointer justify-center sm:justify-start gap-3 text-white hover:opacity-80 transition-all text-sm font-semibold uppercase"
                >
                  <span>{btn.icon}</span>
                  {btn.name}
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-4 text-center sm:text-left">
            <h4 className="font-bold uppercase tracking-widest text-sm text-black">
              Renala Khurd Branch
            </h4>
            <div className="space-y-2 text-sm font-semibold">
              <p className="opacity-100">📍 G.T Road, Renala Khurd</p>
              <p className="opacity-90">📞 044-2635400</p>
              <p className="text-[10px] bg-white/20 px-2 py-1 rounded-md inline-block mt-2">
                12:00 PM - 02:00 AM
              </p>
            </div>
          </div>

          <div className="space-y-4 text-center sm:text-left">
            <h4 className="font-bold uppercase tracking-widest text-sm text-black">
              Pattoki Branch
            </h4>
            <div className="space-y-2 text-sm font-semibold">
              <p className="opacity-100">📍 City Center, Pattoki</p>
              <p className="opacity-90">📞 049-4424400</p>
              <p className="text-[10px] bg-white/20 px-2 py-1 rounded-md inline-block mt-2">
                12:00 PM - 02:00 AM
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="hover:brightness-110 transition-all">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                alt="App Store"
                className="h-8"
              />
            </a>
            <a href="#" className="hover:brightness-110 transition-all">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Play Store"
                className="h-8"
              />
            </a>
          </div>

          <div className="text-center">
            <p className="text-white/80 text-[10px] md:text-xs uppercase font-bold tracking-[0.2em]">
              © {new Date().getFullYear()} Delight Crust — Crafted for Taste
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
