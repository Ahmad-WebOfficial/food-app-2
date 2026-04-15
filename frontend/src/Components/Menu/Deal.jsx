import React, { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import Button from "../../Utils/Button";
import Card from "../../Utils/Card";

const Hero3 = () => {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const pizzaMenu = [
    {
      id: 1,
      name: "Royal Kabab Crust",
      price: "Rs. 1350",
      desc: "Signature stuffed crust pizza with premium kabab chunks and secret spices.",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600",
    },
    {
      id: 2,
      name: "Chicken Tikka",
      price: "Rs. 1220",
      desc: "Traditional tikka chunks & onions with a smoky charcoal flavor.",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=600",
    },
    {
      id: 3,
      name: "Chicken Fajita",
      price: "Rs. 1220",
      desc: "Mexican style marinated chicken with bell peppers and olives.",
      image:
        "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=600",
    },
    {
      id: 4,
      name: "Chicken Lover",
      price: "Rs. 1220",
      desc: "Loaded with extra chicken, extra cheese, and our special ranch sauce.",
      image:
        "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=600",
    },
  ];

  useEffect(() => {
    const handleAutoScroll = () => {
      if (window.innerWidth >= 768 && !isPaused && scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const maxScroll = scrollWidth - clientWidth;

        if (scrollLeft >= maxScroll - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
        }
      }
    };

    const interval = setInterval(handleAutoScroll, 4000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -350 : 350;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const bgImageUrl = "https://www.transparenttextures.com/patterns/food.png";

  return (
    <section
      className="w-full py-10 md:py-20 px-4 md:px-12 relative overflow-hidden bg-[#f3e3dc]"
      style={{
        backgroundImage: `url(${bgImageUrl})`,
        backgroundSize: "400px",
      }}
    >
      <div className="max-w-7xl mx-auto py-10 md:py-16 px-4 md:px-16 relative z-10">
        <div className="mb-10 md:mb-14 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-center mb-4 uppercase tracking-tighter text-gray-900 leading-none">
            Special <span className="text-[#b91c1c] italic">Deals</span>
          </h2>
          <div className="w-20 h-2 bg-[#b91c1c] mx-auto rounded-full"></div>
        </div>

        <div className="relative group/container">
          <button
            onClick={() => scroll("left")}
            className="absolute -left-5 md:-left-10 top-1/2 -translate-y-1/2 z-30 p-3 cursor-pointer bg-white hover:bg-[#b91c1c] hover:text-white rounded-full shadow-xl transition-all duration-300 border border-gray-100 hidden md:flex active:scale-95"
          >
            <ChevronLeft size={28} />
          </button>

          <button
            onClick={() => scroll("right")}
            className="absolute -right-5 md:-right-10 top-1/2 -translate-y-1/2 z-30 p-3 cursor-pointer bg-white hover:bg-[#b91c1c] hover:text-white rounded-full shadow-xl transition-all duration-300 border border-gray-100 hidden md:flex active:scale-95"
          >
            <ChevronRight size={28} />
          </button>

          <div
            ref={scrollRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="flex flex-col md:flex-row overflow-x-hidden md:overflow-x-auto gap-6 md:gap-8 pb-12 scrollbar-hide snap-x snap-mandatory"
          >
            {pizzaMenu.map((item) => (
              <Card key={item.id}>
                <div className="absolute top-4 right-4 z-20 bg-[#b91c1c] text-white text-[10px] font-black px-3 py-1 rounded-full rotate-12 shadow-lg">
                  HOT
                </div>

                <button className="absolute top-4 left-6 z-20 bg-white p-1.5 rounded-full shadow-md">
                  <Heart size={16} className="text-gray-900" />
                </button>

                <div className="h-44 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden mb-4 relative shadow-inner border-2 border-white/10">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                </div>

                <div className="px-2">
                  <h3 className="font-black text-lg uppercase tracking-tight text-gray-900 mb-1">
                    {item.name}
                  </h3>

                  <p className="text-gray-800 text-[15px] mb-4 h-9 line-clamp-2 leading-tight font-medium">
                    {item.desc}
                  </p>

                  <div className="flex flex-col mt-auto gap-3 w-full">
                    <div className="flex flex-col">
                      <span className="text-[9px] text-gray-500 uppercase font-bold tracking-widest">
                        Price
                      </span>
                      <span className="text-gray-900 font-black text-lg tracking-tighter leading-none">
                        {item.price}
                      </span>
                    </div>

                    <div className="w-full">
                      <Button>Add To Cart</Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
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
