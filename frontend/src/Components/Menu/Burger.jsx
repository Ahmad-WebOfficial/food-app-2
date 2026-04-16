import React from "react";
import { Heart, ShoppingBag } from "lucide-react";
import Button from "../../Utils/Button";
import Card from "../../Utils/Card";
import Banner from "../../Utils/Banner";

const BurgerSection = () => {
  const burgers = [
    {
      id: 1,
      name: "Zingrato",
      price: "510",
      desc: "Our signature crispy zinger burger with fresh lettuce and premium mayo sauce.",
      img: "https://www.pngarts.com/files/3/Chicken-Burger-PNG-Photo.png",
    },
    {
      id: 2,
      name: "Special Burger",
      price: "790",
      desc: "The ultimate Delight Crust special: Double patty, extra cheese, and our secret dressing.",
      img: "https://www.pngarts.com/files/3/Chicken-Burger-PNG-Photo.png",
    },
    {
      id: 3,
      name: "Grill Burger",
      price: "570",
      desc: "Perfectly flame-grilled juicy chicken patty with smoky BBQ flavor.",
      img: "https://www.pngarts.com/files/3/Chicken-Burger-PNG-Photo.png",
    },
    {
      id: 4,
      name: "Reggy Burger",
      price: "390",
      desc: "Classic value burger with a tender patty and fresh veggies for a quick bite.",
      img: "https://www.pngarts.com/files/3/Chicken-Burger-PNG-Photo.png",
    },
  ];

  return (
    <section
      className="w-full py-10 md:py-16 "
      style={{
        backgroundImage: `url("https://www.transparenttextures.com/patterns/food.png")`,
        backgroundSize: "400px",
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter text-gray-900 leading-none">
            Our <span className="text-[#b91c1c]">Burgers</span>
          </h2>
          <div className="w-16 md:w-20 h-2 bg-[#b91c1c] mx-auto mt-4 rounded-full"></div>
        </div>

        <Banner className="w-full rounded-[1.5rem] md:rounded-[2rem] overflow-hidden flex flex-col md:flex-row items-center mb-12 shadow-xl border-4 border-white/10">
          <div className="flex-1 p-8 md:p-20">
            <h1 className="text-white text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none">
              BURGER
            </h1>
          </div>
          <div className="flex-1 h-48 md:h-full w-full flex justify-center p-6 md:p-10">
            <img
              src="https://www.pngarts.com/files/3/Chicken-Burger-PNG-Photo.png"
              alt="Main Burger"
              className="w-full max-w-[300px] md:max-w-[400px] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            />
          </div>
        </Banner>

        {/* Mobile: grid-cols-2 | Desktop: lg:grid-cols-4 */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {burgers.map((burger) => (
            <Card key={burger.id} className="p-2 md:p-4 h-full flex flex-col">
              <div className="relative rounded-[1rem] md:rounded-[1.5rem] overflow-hidden bg-white/10 aspect-square mb-3 md:mb-5 flex items-center justify-center p-2 md:p-4">
                <img
                  src={burger.img}
                  alt={burger.name}
                  className="w-full h-full object-contain transition-transform duration-500 hover:scale-110"
                />
                <button className="absolute top-2 right-2 md:top-3 md:right-3 bg-white p-1 md:p-2 rounded-full shadow-md hover:scale-110 transition-transform cursor-pointer">
                  <Heart
                    size={14}
                    className="text-[#b91c1c] md:w-[18px] md:h-[18px]"
                  />
                </button>
              </div>

              <div className="flex-1 px-1 flex flex-col">
                <h3 className="font-black text-xs md:text-xl text-gray-900 mb-1 md:mb-2 leading-tight uppercase italic line-clamp-1">
                  {burger.name}
                </h3>
                <p className="text-[10px] md:text-[15px] text-gray-800 font-medium leading-tight md:leading-relaxed mb-3 line-clamp-2 h-6 md:h-12">
                  {burger.desc}
                </p>

                <div className="mt-auto">
                  <div className="flex justify-between items-end mb-2 md:mb-4">
                    <div>
                      <p className="text-[8px] md:text-[10px] text-gray-700 font-black uppercase tracking-tighter">
                        Price
                      </p>
                      <p className="font-black text-gray-900 text-xs md:text-2xl leading-none">
                        Rs. {burger.price}
                      </p>
                    </div>
                  </div>

                  <Button>
                    <ShoppingBag size={12} className="md:w-4 md:h-4" />
                    <span className="text-[10px] md:text-sm">Add Card</span>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BurgerSection;
