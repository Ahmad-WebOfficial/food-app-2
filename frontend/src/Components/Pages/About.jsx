import React from "react";
import { useNavigate } from "react-router-dom";
import teamImg from "../../assets/teams.jpeg";
import {
  Target,
  Zap,
  Star,
  ShieldCheck,
  Heart,
  ArrowRight,
} from "lucide-react";

const About = () => {
  const navigate = useNavigate();

  const offers = [
    {
      img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=500",
      title: "Satisfying Cravings",
    },
    {
      img: "https://images.pexels.com/photos/2696064/pexels-photo-2696064.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Quality Service",
    },
    {
      img: "https://images.unsplash.com/photo-1526367790999-0150786686a2?q=80&w=500",
      title: "Fastest Delivery",
    },
  ];

  return (
    <div className="bg-[#fcfcfc] min-h-screen font-sans selection:bg-[#D44A1C] selection:text-white">
      <section className="relative h-[65vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={teamImg}
            className="w-full h-full object-cover brightness-[0.8]  object-center"
            alt="Delight Crust Team"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/20"></div>
        </div>
      </section>

      <section className="relative px-6 -mt-24 z-20">
        <div className="max-w-4xl mx-auto bg-gray-200 rounded-[2.5rem] shadow-[0_30px_70px_rgba(0,0,0,0.15)] p-10 md:p-20 text-center border border-gray-50">
          <div className="bg-orange-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 rotate-3">
            <Target className="text-[#D44A1C] w-10 h-10" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black uppercase italic text-[#D44A1C] mb-8 tracking-tighter">
            Our Mission
          </h2>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-medium italic">
            "At{" "}
            <span className="text-[#D44A1C] font-extrabold">Zesty Bites</span>
            , hamara maqsad sirf pizza bechna nahi, balkay har bite mein khushi
            aur quality deliver karna hai. Hum Kasur aur Pattoki mein
            fast food ka standard tabdeel kar rahe hain."
          </p>
        </div>
      </section>

      <section className="py-28 px-6 max-w-[1200px] mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-black uppercase italic text-gray-900 mb-4">
          What <span className="text-[#D44A1C]">We Offer</span>
        </h2>
        <div className="h-1.5 w-24 bg-yellow-500 mx-auto rounded-full mb-16"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {offers.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-[2.5rem] aspect-[4/3] shadow-xl transition-all duration-500 group-hover:shadow-orange-200 group-hover:-translate-y-2">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-10">
                  <p className="text-white font-black uppercase italic text-2xl tracking-tighter">
                    {item.title}
                  </p>
                </div>
              </div>
              <p className="mt-8 text-2xl font-black uppercase italic text-gray-800 group-hover:text-[#D44A1C] transition-colors">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-200 py-24 px-6 rounded-t-[4rem] relative overflow-hidden">
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#D44A1C]/10 blur-[100px] rounded-full"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              {
                icon: Zap,
                color: "text-yellow-500",
                title: "Fast Delivery",
                desc: "Under 30 mins delivery.",
              },
              {
                icon: ShieldCheck,
                color: "text-[#D44A1C]",
                title: "Hygiene First",
                desc: "Cleanest kitchen in city.",
              },
              {
                icon: Star,
                color: "text-yellow-500",
                title: "Top Rated",
                desc: "Loved by locals.",
              },
              {
                icon: Heart,
                color: "text-[#D44A1C]",
                title: "Pure Passion",
                desc: "Made with love.",
              },
            ].map((value, i) => (
              <div key={i} className="text-center group">
                <div className="bg-white/5 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#D44A1C] transition-all duration-500 group-hover:-rotate-12">
                  <value.icon
                    className={`${value.color} group-hover:text-white transition-colors`}
                    size={36}
                  />
                </div>
                <h3 className="text-black font-black uppercase italic text-lg mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm font-medium">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-24 text-center">
            <button
              onClick={() => navigate("/")}
              className="group bg-[#D44A1C] hover:bg-[#D44A4C] cursor-pointer text-white  px-10 py-5 rounded-2xl font-black uppercase tracking-[0.2em] transition-all duration-500 flex items-center gap-4 mx-auto shadow-[0_20px_50px_rgba(212,74,28,0.3)]"
            >
              Start Your Order{" "}
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
