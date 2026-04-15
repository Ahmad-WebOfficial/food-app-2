import React from "react";
import { Heart } from "lucide-react";
import Button from "../../Utils/Button";
import { ShoppingBag } from "lucide-react";
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
          <h2 className="text-5xl font-black uppercase italic tracking-tighter text-gray-900">
            Our <span className="text-[#b91c1c]">Local Treat</span>
          </h2>
          <div className="w-20 h-2 bg-[#b91c1c] mx-auto mt-4 rounded-full"></div>
        </div>

        <Banner className="w-full rounded-[2rem] overflow-hidden flex flex-col md:flex-row items-center mb-12 shadow-xl border-4 border-white/10">
          <div className="flex-1 p-10 md:p-20">
            <h1 className="text-white text-8xl md:text-9xl font-black uppercase tracking-tighter leading-none">
              LOCAL TREAT
            </h1>
          </div>
          <div className="flex-1 h-full w-full">
            <img
              src="https://pngimg.com/uploads/fried_chicken/fried_chicken_PNG14074.png"
              alt="Main Pizza"
              className="w-full h-full object-cover min-h-[300px]"
            />
          </div>
        </Banner>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {localTreats.map((treat) => (
            <Card key={treat.id}>
              <div className="relative rounded-[1rem] overflow-hidden aspect-square mb-4">
                <img
                  src={treat.img}
                  alt={treat.name}
                  className="w-full h-full object-cover"
                />
                <button className="absolute top-3 right-3 bg-white p-1.5 rounded-full shadow-md hover:scale-110 transition-transform">
                  <Heart size={16} className="text-gray-900" />
                </button>
              </div>

              <div className="flex-1 px-1">
                <h3 className="font-black text-lg text-gray-900 mb-1 leading-tight">
                  {treat.name}
                </h3>
                <p className="text-[15px] text-gray-800 font-medium leading-relaxed mb-4 line-clamp-4 h-12">
                  {treat.desc}
                </p>

                <div className="mt-auto">
                  <p className="font-black text-gray-900 text-sm mb-3">
                    from Rs. {treat.price}
                  </p>

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

export default TreatSection;
