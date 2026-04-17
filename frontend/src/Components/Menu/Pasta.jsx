import React from "react";
import { ShoppingBag, Heart } from "lucide-react";
import Button from "../../Utils/Button";
import Card from "../../Utils/Card";
import Banner from "../../Utils/Banner";

const PastaSection = () => {
  const pastas = [
    {
      id: 1,
      name: "B.B.Q Pasta",
      price: "850",
      desc: "Smoky BBQ chicken chunks tossed in creamy white sauce with premium penne pasta and exotic herbs. A Delight Crust special.",
      img: "https://www.pngall.com/wp-content/uploads/2018/04/Pasta-PNG-Image.png",
    },
    {
      id: 2,
      name: "Chicken Pasta",
      price: "750",
      desc: "Classic Alfredo-style pasta with tender grilled chicken, rich cheese sauce, and Italian seasoning for a perfect taste.",
      img: "https://pngimg.com/uploads/pasta/pasta_PNG58.png",
    },
  ];

  return (
    <section
      className="w-full py-10 md:py-16 bg-[#f3e3dc]"
      style={{
        backgroundImage: `url("https://www.transparenttextures.com/patterns/food.png")`,
        backgroundSize: "400px",
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter text-gray-900 leading-none">
            Our <span className="text-[#b91c1c]">Pastas</span>
          </h2>
          <div className="w-16 md:w-20 h-2 bg-[#b91c1c] mx-auto mt-4 rounded-full"></div>
        </div>

        <Banner className="w-full rounded-[1.5rem] md:rounded-[2rem] overflow-hidden flex flex-col md:flex-row items-center mb-12 shadow-xl border-4 border-white/10">
          <div className="flex-1 p-8 md:p-20">
            <h1 className="text-white text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none">
              PASTA
            </h1>
          </div>
          <div className="flex-1 h-48 md:h-full w-full flex justify-center p-6 md:p-10">
            <img
              src="https://pngimg.com/uploads/pasta/pasta_PNG58.png"
              alt="Main Pasta"
              className="w-full max-w-[300px] md:max-w-[400px] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            />
          </div>
        </Banner>

        {/* Mobile: grid-cols-2 | Desktop: lg:grid-cols-4 */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {pastas.map((item) => (
            <Card key={item.id} className="p-2 md:p-4 h-full flex flex-col">
              <div className="relative rounded-[1rem] md:rounded-[1.5rem] overflow-hidden bg-white/10 aspect-square mb-3 md:mb-5 flex items-center justify-center p-2 md:p-4">
                <img
                  src={item.img}
                  alt={item.name}
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
                <h3 className="font-black text-xs md:text-xl text-white  mb-1 md:mb-2 leading-tight uppercase italic line-clamp-1">
                  {item.name}
                </h3>

                <p className="text-[10px] md:text-[15px] text-gray-400 font-medium leading-tight md:leading-relaxed mb-3 line-clamp-2 h-6 md:h-12">
                  {item.desc}
                </p>

                <div className="mt-auto">
                  <div className="flex justify-between items-end mb-2 md:mb-4">
                    <div>
                      <p className="text-[8px] md:text-[10px] text-white  font-black uppercase tracking-tighter">
                        Price
                      </p>
                      <p className="font-black text-white  text-sm md:text-2xl leading-none">
                        Rs. {item.price}
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

export default PastaSection;
