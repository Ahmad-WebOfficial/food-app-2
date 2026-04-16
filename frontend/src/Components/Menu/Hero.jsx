import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

const hardeesCategories = [
  {
    id: 1,
    name: "Burger",
    img: "https://www.pngarts.com/files/3/Chicken-Burger-PNG-Photo.png",
  },
  {
    id: 2,
    name: "Pizza",
    img: "https://pngimg.com/uploads/pizza/pizza_PNG44095.png",
  },
  {
    id: 3,
    name: "Sandwiches",
    img: "https://www.pngarts.com/files/3/Sandwich-PNG-Photo.png",
  },
  {
    id: 4,
    name: "Roll Wrap",
    img: "https://pngimg.com/uploads/kebab/kebab_PNG27.png",
  },
  {
    id: 5,
    name: "Local Treats",
    img: "https://pngimg.com/uploads/fried_chicken/fried_chicken_PNG14074.png",
  },
  {
    id: 6,
    name: "Pasta",
    img: "https://pngimg.com/uploads/pasta/pasta_PNG58.png",
  },
];

const HardeesMenuExplorer = () => {
  const [activeId, setActiveId] = useState(null);
  const [searchTerm, setSearchTerm] = useState(""); 

  // Scroll function
  const scrollToMenu = (categoryName) => {
    const section = document.getElementById(categoryName);
    if (section) {
      const yOffset = -100;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // ✅ Search Filter Logic
  const filteredCategories = hardeesCategories.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <>
      <section
        className="min-h-screen py-16 px-4 md:px-8"
        style={{
          backgroundImage:
            'url("https://www.transparenttextures.com/patterns/food.png")',
        }}
      >
        <div className="bg-gray-100 rounded-[20px] shadow-sm p-8 md:p-12 w-full max-w-7xl mx-auto border border-gray-100">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-10 text-black">
            Explore The Menu
          </h2>

          <div className="max-w-4xl mx-auto mb-16 relative">
            <div className="relative">
              <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
                <Search
                  className="text-[#5D0000]"
                  size={22}
                  strokeWidth={2.5}
                />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for Pizza, Burger..."
                className="w-full h-16 pl-16 pr-6 rounded-full border border-gray-300 focus:border-[#5D0000] focus:ring-4 focus:ring-[#5D0000]/10 focus:outline-none text-[15px] md:text-lg transition-all bg-white"
              />
            </div>
          </div>

          <div className="relative px-20">
            {/* ✅ Check if there are matches */}
            {filteredCategories.length > 0 ? (
              <Swiper
                modules={[Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                navigation={{
                  nextEl: ".button-next",
                  prevEl: ".button-prev",
                }}
                breakpoints={{
                  640: { slidesPerView: 3 },
                  1024: { slidesPerView: 5 },
                  1280: { slidesPerView: 6 },
                }}
              >
                {filteredCategories.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div
                      onClick={() => {
                        setActiveId(item.id);
                        scrollToMenu(item.name);
                      }}
                      className="flex flex-col items-center group cursor-pointer text-center"
                    >
                      <div
                        className={`
                        w-full aspect-square p-4 flex items-center justify-center 
                        ${activeId === item.id ? "border-2 border-[#5D0000] rounded-xl relative" : ""}
                      `}
                      >
                        {activeId === item.id && (
                          <div className="absolute inset-0 flex items-center justify-center opacity-30">
                            <svg
                              className="w-1/2 h-1/2 text-[#5D0000]"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1"
                                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.921-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                              ></path>
                            </svg>
                          </div>
                        )}
                        <img
                          src={item.img}
                          alt={item.name}
                          className="w-full h-full object-contain drop-shadow-lg"
                        />
                      </div>
                      <span className="text-[18px] leading-tight font-bold mt-5 text-black">
                        {item.name}
                      </span>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              /* ✅ NOT MATCHED Message */
              <div className="text-center py-10">
                <h3 className="text-2xl font-bold text-gray-500">
                  Not Matched
                </h3>
                <p className="text-gray-400">Please try another category</p>
              </div>
            )}

            {filteredCategories.length > 0 && (
              <>
                <button className="button-prev absolute -left-12 top-1/2 -translate-y-1/2 z-20 text-black hover:text-black/70 transition-all cursor-pointer">
                  <ChevronLeft size={55} strokeWidth={2.5} />
                </button>
                <button className="button-next absolute -right-12 top-1/2 -translate-y-1/2 z-20 text-black hover:text-black/70 transition-all cursor-pointer">
                  <ChevronRight size={55} strokeWidth={2.5} />
                </button>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default HardeesMenuExplorer;
