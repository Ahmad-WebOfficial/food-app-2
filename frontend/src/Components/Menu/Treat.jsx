import React from "react";
import { Heart, ShoppingBag } from "lucide-react";
import Button from "../../Utils/Button";
import Card from "../../Utils/Card";
import Banner from "../../Utils/Banner";

const TreatSection = () => {
  const localTreats = [
    {
      id: 1,
      name: "Chicken Roll",
      price: "250",
      desc: "Classic soft paratha filled with juicy roasted chicken chunks and creamy garlic mayo sauce.",
      img: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",
    },
    {
      id: 2,
      name: "Zinger Roll",
      price: "350",
      desc: "Crunchy fried zinger strips wrapped in a toasted paratha with spicy sauce and fresh lettuce.",
      img: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Kabab Roll",
      price: "300",
      desc: "Authentic grilled seekh kabab wrapped in paratha with tangy mint chutney and sliced onions.",
      img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <section
      className="w-full py-10"
      style={{
        backgroundImage: `url("https://www.transparenttextures.com/patterns/food.png")`,
        backgroundSize: "400px",
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter text-gray-900">
            Our <span className="text-[#b91c1c]">Local Treat</span>
          </h2>
          <div className="w-16 md:w-20 h-2 bg-[#b91c1c] mx-auto mt-4 rounded-full"></div>
        </div>

        <Banner className="w-full rounded-[1.5rem] md:rounded-[2rem] overflow-hidden flex flex-col md:flex-row items-center mb-12 shadow-xl border-4 border-white/10">
          <div className="flex-1 p-8 md:p-20">
            <h1 className="text-white text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none">
              LOCAL TREAT
            </h1>
          </div>
          <div className="flex-1 h-48 md:h-full w-full">
            <img
              src="https://pngimg.com/uploads/fried_chicken/fried_chicken_PNG14074.png"
              alt="Main Treat"
              className="w-full h-full object-cover min-h-[250px] md:min-h-[300px]"
            />
          </div>
        </Banner>

        {/* Mobile: 2 columns, Desktop: 4 columns */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {localTreats.map((treat) => (
            <Card key={treat.id} className="p-2 md:p-4 h-full flex flex-col">
              <div className="relative rounded-[0.8rem] md:rounded-[1rem] overflow-hidden aspect-square mb-3">
                <img
                  src={treat.img}
                  alt={treat.name}
                  className="w-full h-full object-cover"
                />
                <button className="absolute top-2 right-2 bg-white p-1 md:p-1.5 rounded-full shadow-md hover:scale-110 transition-transform">
                  <Heart size={14} className="text-gray-900 md:w-4 md:h-4" />
                </button>
              </div>

              <div className="flex-1 px-1 flex flex-col">
                <h3 className="font-black text-xs md:text-lg text-gray-900 mb-1 leading-tight line-clamp-1">
                  {treat.name}
                </h3>
                <p className="text-[10px] md:text-[15px] text-gray-800 font-medium leading-tight md:leading-relaxed mb-3 line-clamp-2 h-6 md:h-12">
                  {treat.desc}
                </p>

                <div className="mt-auto">
                  <p className="font-black text-gray-900 text-sm md:text-2xl mb-2">
                    from Rs. {treat.price}
                  </p>

                  <Button >
                    <ShoppingBag size={12} className="md:w-4 md:h-4" />
                    <span>Add Card</span>
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

export default TreatSection;