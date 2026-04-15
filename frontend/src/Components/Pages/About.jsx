import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Target,
  Users,
  Award,
  Pizza,
  ArrowRight,
  Zap,
  Star,
  ShieldCheck,
} from "lucide-react";

const About = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  const coreValues = [
    {
      icon: Pizza,
      title: "Authentic Taste",
      desc: "Secret family recipes crafted with imported spices.",
      color: "bg-orange-500",
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      desc: "Hot & fresh meals at your doorstep in under 30 mins.",
      color: "bg-yellow-500",
    },
    {
      icon: ShieldCheck,
      title: "Hygiene First",
      desc: "Strict quality control and sanitized kitchen environment.",
      color: "bg-orange-600",
    },
    {
      icon: Star,
      title: "Top Rated",
      desc: "The most loved fast food brand in Renala & Pattoki.",
      color: "bg-yellow-600",
    },
  ];

  const backgroundStyle = {
    backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8) 10%, rgba(0,0,0,0.4) 100%), url("https://images.unsplash.com/photo-1552539618-7eec9b4d1796?q=80&w=2000&auto=format&fit=crop")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  };

  return (
    <div
      style={backgroundStyle}
      className="text-white min-h-screen font-sans selection:bg-yellow-500 selection:text-black"
    >
      {/* 1. HERO SECTION */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-20 px-6 md:px-16 overflow-hidden">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="h-1 w-12 bg-yellow-500 rounded-full"></div>
              <span className="text-yellow-500 font-black uppercase tracking-[0.4em] text-[10px] md:text-xs">
                Authentic Since 2023
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-[0.9] md:leading-[0.8] mb-8 md:mb-10">
              The <span className="text-orange-500">Perfect</span> <br />
              <span className="text-yellow-500 text-shadow-glow">Crust</span>
            </h1>
            <p className="text-gray-300 text-base md:text-xl max-w-xl leading-relaxed font-medium mb-10">
              At Delight Crust, we don’t just make food; we create a world of
              flavors. Every single slice tells a delicious new story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {/* --- NAVIGATE TO HOME --- */}
              <button
                onClick={goToHome}
                className="bg-orange-500 hover:bg-orange-600 text-white cursor-pointer px-10 py-4 rounded-xl font-black uppercase text-sm tracking-widest transition-all shadow-[0_10px_30px_rgba(249,115,22,0.3)] w-full sm:w-auto"
              >
                Our Menu
              </button>
            </div>
          </div>

          <div className="hidden md:flex justify-end">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-[20px] border-orange-500/20 flex items-center justify-center animate-pulse">
              <div className="w-48 h-48 md:w-60 md:h-60 rounded-full border-[15px] border-yellow-500/20 flex items-center justify-center">
                <Pizza className="w-20 h-20 md:w-32 md:h-32 text-orange-500/20 rotate-12" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE JOURNEY */}
      <section className="py-16 md:py-24 px-6 md:px-16 bg-black/10 backdrop-blur-xl border-y border-white/5">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 relative group overflow-hidden rounded-[2rem] md:rounded-[3rem]">
            <img
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591"
              alt="Our Passion"
              className="w-full h-[300px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-110 brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6 md:p-10">
              <h2 className="text-2xl md:text-4xl font-black uppercase italic text-white leading-none">
                Baked with <span className="text-yellow-500">Love</span> &{" "}
                <span className="text-orange-500">Fire</span>
              </h2>
            </div>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-br from-orange-600 to-orange-800 p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-black uppercase italic mb-6 leading-tight">
              Our Mission is <br /> Your Satisfaction
            </h3>
            <p className="text-orange-100 text-base md:text-lg leading-relaxed mb-8">
              Delight Crust is built on the foundation of quality. Hum har
              ingredient khud select karte hain taake aap tak premium taste
              pohanch sake.
            </p>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
              <p className="text-xs font-black uppercase tracking-widest text-yellow-400 mb-2">
                Branches
              </p>
              <p className="text-sm font-bold">📍 Renala Khurd & Pattoki</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 px-6 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="group p-8 rounded-[2rem] md:rounded-[2.5rem] bg-white/10 border border-white/10 hover:border-yellow-500/50 transition-all duration-500"
              >
                <div
                  className={`${value.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:rotate-12 transition-transform`}
                >
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-black uppercase italic mb-4 group-hover:text-yellow-500 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 text-center px-6">
        <div className="max-w-4xl mx-auto bg-yellow-500 p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] shadow-[0_20px_50px_rgba(234,179,8,0.2)]">
          <h2 className="text-3xl md:text-5xl font-black uppercase italic text-black mb-8 leading-none">
            Taste the <br className="md:hidden" />{" "}
            <span className="text-orange-700">Extraordinary</span>
          </h2>
          <button
            onClick={goToHome}
            className="bg-black text-white cursor-pointer hover:bg-black/85 px-8 md:px-12 py-4 md:py-5 rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-all flex items-center gap-4 mx-auto shadow-2xl text-sm md:text-base"
          >
            Order Now <ArrowRight />
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
