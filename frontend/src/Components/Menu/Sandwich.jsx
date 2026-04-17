import React from "react";
import { ShoppingBag } from "lucide-react";
import Button from "../../Utils/Button";
import Card from "../../Utils/Card";
import Banner from "../../Utils/Banner";

const SandwichSection = () => {
  const sandwiches = [
    {
      id: 1,
      name: "Club Sandwich",
      price: "650",
      desc: "Classic 3-layer sandwich with fresh egg, chicken, and crispy veggies.",
      img: "https://www.pngarts.com/files/3/Sandwich-PNG-Photo.png",
    },
    {
      id: 2,
      name: "Super Sandwich",
      price: "700",
      desc: "Extra loaded with premium chicken chunks and Delight Crust secret sauce.",
      img: "https://www.pngarts.com/files/3/Sandwich-PNG-Photo.png",
    },
    {
      id: 3,
      name: "Grill Sandwich",
      price: "650",
      desc: "Perfectly toasted with spicy grilled chicken and melted cheese.",
      img: "https://www.pngarts.com/files/3/Sandwich-PNG-Photo.png",
    },
    {
      id: 4,
      name: "Mexican Sandwich",
      price: "800",
      desc: "Spicy Mexican style filling with jalapenos and tangy dressing.",
      img: "https://www.pngarts.com/files/3/Sandwich-PNG-Photo.png",
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
            Our <span className="text-[#b91c1c]">SANDWICH</span>
          </h2>
          <div className="w-16 md:w-20 h-2 bg-[#b91c1c] mx-auto mt-4 rounded-full"></div>
        </div>

        <Banner className="w-full rounded-[1.5rem] md:rounded-[2rem] overflow-hidden flex flex-col md:flex-row items-center mb-12 shadow-xl border-4 border-white/10">
          <div className="flex-1 p-8 md:p-20">
            <h1 className="text-white text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none">
              SANDWICH
            </h1>
          </div>
          <div className="flex-1 h-48 md:h-full w-full flex justify-center p-6 md:p-10">
            <img
              src="https://www.pngarts.com/files/3/Sandwich-PNG-Photo.png"
              alt="Main Sandwich"
              className="w-full max-w-[300px] md:max-w-[400px] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            />
          </div>
        </Banner>

        {/* Mobile: grid-cols-2 | Desktop: lg:grid-cols-4 */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {sandwiches.map((item) => (
            <Card key={item.id} className="p-2 md:p-4 h-full flex flex-col">
              <div className="relative rounded-[1rem] md:rounded-[1.5rem] overflow-hidden bg-white/10 aspect-square mb-3 md:mb-5 flex items-center justify-center p-2 md:p-4">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-contain transition-transform group-hover:rotate-3"
                />
              </div>

              <div className="flex-1 px-1 flex flex-col">
                <h3 className="font-black text-xs md:text-xl text-white  mb-1 md:mb-2 uppercase italic line-clamp-1">
                  {item.name}
                </h3>
                <p className="text-[10px] md:text-[15px] text-gray-400 font-medium leading-tight md:leading-relaxed mb-3 line-clamp-2 h-6 md:h-12">
                  {item.desc}
                </p>

                <div className="mt-auto">
                  <p className="font-black text-white  text-sm md:text-2xl mb-2 md:mb-4 leading-none">
                    Rs. {item.price}
                  </p>

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

export default SandwichSection;
