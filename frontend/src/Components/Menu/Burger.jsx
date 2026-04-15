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
      className="w-full py-16 bg-[#f3e3dc]"
      style={{
        backgroundImage: `url("https://www.transparenttextures.com/patterns/food.png")`,
        backgroundSize: "400px",
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-5xl font-black uppercase italic tracking-tighter text-gray-900 leading-none">
            Our <span className="text-[#b91c1c]">Burgers</span>
          </h2>
          <div className="w-20 h-2 bg-[#b91c1c] mx-auto mt-4 rounded-full"></div>
        </div>

        <Banner className="w-full  rounded-[2rem] overflow-hidden flex flex-col md:flex-row items-center mb-12 shadow-xl border-4 border-white/10">
          <div className="flex-1 p-10 md:p-20">
            <h1 className="text-white text-7xl md:text-9xl font-black uppercase tracking-tighter leading-none">
              BURGER
            </h1>
          </div>
          <div className="flex-1 h-full flex justify-center p-10">
            <img
              src="https://www.pngarts.com/files/3/Chicken-Burger-PNG-Photo.png"
              alt="Main Burger"
              className="w-full max-w-[400px] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            />
          </div>
        </Banner>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {burgers.map((burger) => (
            <Card key={burger.id}>
              <div className="relative rounded-[1.5rem] overflow-hidden bg-white/10 aspect-square mb-5 flex items-center justify-center p-4">
                <img
                  src={burger.img}
                  alt={burger.name}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
                <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:scale-110 transition-transform cursor-pointer">
                  <Heart size={18} className="text-[#b91c1c]" />
                </button>
              </div>

              <div className="flex-1 px-1">
                <h3 className="font-black text-xl text-gray-900 mb-2 leading-tight uppercase italic">
                  {burger.name}
                </h3>
                <p className="text-[15px] text-gray-800 font-medium leading-relaxed mb-6 line-clamp-3 h-12">
                  {burger.desc}
                </p>

                <div className="mt-auto">
                  <div className="flex justify-between items-end mb-4">
                    <div>
                      <p className="text-[10px] text-gray-700 font-black uppercase tracking-tighter">
                        Price
                      </p>
                      <p className="font-black text-gray-900 text-2xl leading-none">
                        Rs. {burger.price}
                      </p>
                    </div>
                  </div>

                  <Button>
                    <ShoppingBag size={16} />
                    Add To Cart
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
