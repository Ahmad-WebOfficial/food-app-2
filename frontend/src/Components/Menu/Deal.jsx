import React, { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";
import Button from "../../Utils/Button";
import Card from "../../Utils/Card";

const Hero3 = () => {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const pizzaMenu = [
    {
      id: 1,
      name: "Royal Kabab Crust",
      price: "Rs. 1,350",
      desc: "Signature stuffed crust pizza with premium kabab chunks and secret spices.",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600",
    },
    {
      id: 2,
      name: "Chicken Tikka",
      price: "Rs. 1,220",
      desc: "Traditional tikka chunks & onions with a smoky charcoal flavor.",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=600",
    },
    {
      id: 3,
      name: "Chicken Fajita",
      price: "Rs. 1,340",
      desc: "Mexican style marinated chicken with bell peppers and olives.",
      image:
        "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=600",
    },
    {
      id: 4,
      name: "Chicken Lover",
      price: "Rs. 1,410",
      desc: "Loaded with extra chicken, extra cheese, and our special ranch sauce.",
      image:
        "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=600",
    },
    {
      id: 5,
      name: "Chicken Lover",
      price: "Rs. 1,260",
      desc: "Loaded with extra chicken, extra cheese, and our special ranch sauce.",
      image:
        "https://th.bing.com/th/id/OIP.LjVBYFCToUWTCy1hrZBs3QHaFC?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
  ];

  useEffect(() => {
    const handleAutoScroll = () => {
      if (window.innerWidth >= 768 && !isPause && scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft >= scrollWidth - clientWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
      }
    };
    const interval = setInterval(handleAutoScroll, 4000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full py-10 md:py-20 px-4 relative overflow-hidden ">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url('https://www.transparenttextures.com/patterns/food.png')`,
          backgroundSize: "400px",
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex items-center justify-between mb-10 px-2 md:px-6">
          <div className="flex flex-col">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-gray-900 leading-none">
              Special <span className="text-[#b91c1c] italic">Deals</span>
            </h2>
            <div className="w-16 h-1.5 bg-[#b91c1c] mt-2 rounded-full"></div>
          </div>

          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-2 bg-white rounded-full shadow-md hover:bg-[#b91c1c] hover:text-white transition-colors cursor-pointer"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 bg-white rounded-full shadow-md hover:bg-[#b91c1c] hover:text-white transition-colors cursor-pointer"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Mobile: 'grid grid-cols-2' (No scroll, items wrap to next line)
            Desktop: 'md:flex md:overflow-x-auto' (Scroll enable ho jayega)
        */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="grid grid-cols-2 gap-3 md:flex md:overflow-x-auto md:gap-6 pb-10 px-2 scrollbar-hide snap-x"
        >
          {pizzaMenu.map((item) => (
            /* Mobile: Default width (grid handles it)
               Large Screen: lg:min-w-[calc(25%-18px)] (4 cards in scroll)
            */
            <div
              key={item.id}
              className="w-full md:min-w-[calc(50%-8px)] lg:min-w-[calc(25%-18px)] snap-start group"
            >
              <Card className="hover:scale-[1.02] transition-transform duration-300 h-full flex flex-col p-2 md:p-3">
                <div className="relative h-24 md:h-44 rounded-[1rem] md:rounded-[1.2rem] overflow-hidden mb-3 shadow-md">
                  <div className="absolute top-2 right-2 z-20 bg-[#b91c1c] text-white text-[7px] md:text-[10px] font-black px-1.5 py-0.5 md:px-2 md:py-1 rounded-md rotate-3 shadow-lg">
                    HOT
                  </div>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="flex flex-col flex-grow">
                  <h3 className="font-black text-[10px] md:text-lg uppercase tracking-tight text-white mb-1 line-clamp-1">
                    {item.name}
                  </h3>
                  <p className="text-gray-300 text-[10px] md:text-sm mb-3 line-clamp-2 font-medium leading-tight">
                    {item.desc}
                  </p>

                  <div className="mt-auto flex flex-col gap-2">
                    <div className="flex flex-col">
                      <span className="text-[8px] md:text-[9px] text-white uppercase font-bold tracking-widest leading-none">
                        Price
                      </span>
                      <span className="text-white font-black text-[11px] md:text-xl">
                        {item.price}
                      </span>
                    </div>

                    <Button>
                      <ShoppingCart className="w-3 h-3 md:w-4 md:h-4" />
                      <span className="text-[8px] md:text-xs">Order Now</span>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Hero3;
