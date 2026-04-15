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
      className="w-full py-16 bg-[#f3e3dc]"
      style={{
        backgroundImage: `url("https://www.transparenttextures.com/patterns/food.png")`,
        backgroundSize: "400px",
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-5xl font-black uppercase italic tracking-tighter text-gray-900 leading-none">
            Our <span className="text-[#b91c1c]">SANDWICH</span>
          </h2>
          <div className="w-20 h-2 bg-[#b91c1c] mx-auto mt-4 rounded-full"></div>
        </div>
        <Banner className="w-full  rounded-[2rem] overflow-hidden flex flex-col md:flex-row items-center mb-12 shadow-xl border-4 border-white/10">
          <div className="flex-1 p-10 md:p-20">
            <h1 className="text-white text-7xl md:text-9xl font-black uppercase tracking-tighter leading-none">
              SANDWICH
            </h1>
          </div>
          <div className="flex-1 h-full flex justify-center p-10">
            <img
              src="https://www.pngarts.com/files/3/Sandwich-PNG-Photo.png"
              alt="Main Burger"
              className="w-full max-w-[400px] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            />
          </div>
        </Banner>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sandwiches.map((item) => (
            <Card key={item.id}>
              <div className="relative rounded-[1.5rem] overflow-hidden bg-white/10 aspect-square mb-5 flex items-center justify-center p-4">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-contain transition-transform group-hover:rotate-3"
                />
              </div>
              <h3 className="font-black text-xl text-gray-900 mb-2 uppercase italic">
                {item.name}
              </h3>
              <p className="text-[15px] text-gray-800 font-medium mb-6 h-12 line-clamp-3">
                {item.desc}
              </p>
              <div className="mt-auto">
                <p className="font-black text-gray-900 text-2xl mb-4 leading-none">
                  Rs. {item.price}
                </p>
                <Button>
                  <ShoppingBag size={16} />
                  Add To Cart
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SandwichSection;
