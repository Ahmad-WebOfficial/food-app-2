import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

const categories = [
  {
    id: 1,
    name: "Rolls Wraps",
    img: "https://pngimg.com/uploads/fries/fries_PNG37.png",
  },
  {
    id: 2,
    name: "Sandwiches",
    img: "https://www.pngarts.com/files/3/Sandwich-PNG-Photo.png",
  },

  {
    id: 3,
    name: "Pastas",
    img: "https://pngimg.com/uploads/pasta/pasta_PNG58.png",
  },
  {
    id: 4,
    name: "Fries",
    img: "https://pngimg.com/uploads/fries/fries_PNG37.png",
  },

  {
    id: 5,
    name: "Local Treats",
    img: "https://pngimg.com/uploads/fried_chicken/fried_chicken_PNG14074.png",
  },
  {
    id: 6,
    name: "Burgers",
    img: "https://www.pngarts.com/files/3/Chicken-Burger-PNG-Photo.png",
  },
];
const MenuExplorer = () => {
  return (
    <section
      className="relative min-h-[80vh] py-10 px-4 flex items-center justify-center overflow-hidden"
      style={{
        backgroundColor: "#f7f7f7",
        backgroundImage: `url("https://www.transparenttextures.com/patterns/food.png")`,
        backgroundRepeat: "repeat",
      }}
    >
      <div className="bg-white rounded-[40px] shadow-2xl border border-gray-100 p-6 md:p-8 w-full max-w-5xl relative z-10 mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-6 uppercase tracking-tighter text-black">
          Explore the Menu
        </h2>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="relative group">
            <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
              <Search className="text-[#D44A1C]" size={20} />
            </div>
            <input
              type="text"
              placeholder="Search for Burgers, Pizza or Sandwiches..."
              className="w-full h-12 pl-12 pr-6 rounded-full border border-gray-200 focus:border-[#D44A1C] focus:ring-4 focus:ring-[#D44A1C]/10 focus:outline-none text-sm transition-all shadow-inner bg-gray-50/50"
            />
          </div>
        </div>

        <div className="relative px-4 md:px-12">
          <Swiper
            modules={[Navigation]}
            spaceBetween={15}
            slidesPerView={2}
            navigation={{
              nextEl: ".button-next",
              prevEl: ".button-prev",
            }}
            breakpoints={{
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
            className="mySwiper"
          >
            {categories.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="flex flex-col items-center group cursor-pointer py-4">
                  <span className="text-[15px] font-black uppercase mb-3 text-gray-700 group-hover:text-gray-800 transition-colors tracking-widest text-center">
                    {item.name}
                  </span>

                  <div className="w-24 h-24 md:w-30 md:h-30 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6 p-2">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-contain drop-shadow-2xl"
                      onError={(e) => {
                        e.target.src =
                          "https://cdn-icons-png.flaticon.com/512/706/706164.png";
                      }}
                    />
                  </div>

                  <span className="text-[18px] font-bold mt-4 text-gray-700 group-hover:text-gray-800 text-center">
                    {item.name}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="button-prev absolute -left-4 top-1/2 -translate-y-1/2 z-20 text-gray-400 hover:text-gray-500 transition-all cursor-pointer">
            <ChevronLeft size={45} strokeWidth={3} />
          </button>
          <button className="button-next absolute -right-4 top-1/2 -translate-y-1/2 z-20 text-gray-400 hover:text-gray-500 transition-all cursor-pointer">
            <ChevronRight size={45} strokeWidth={3} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MenuExplorer;
