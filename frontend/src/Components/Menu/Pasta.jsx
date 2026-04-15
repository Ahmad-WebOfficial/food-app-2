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
      className="w-full py-16 bg-[#f3e3dc]"
      style={{
        backgroundImage: `url("https://www.transparenttextures.com/patterns/food.png")`,
        backgroundSize: "400px",
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-5xl font-black uppercase italic tracking-tighter text-gray-900 leading-none">
            Our <span className="text-[#b91c1c]">Pastas</span>
          </h2>
          <div className="w-20 h-2 bg-[#b91c1c] mx-auto mt-4 rounded-full"></div>
        </div>
        <Banner className="w-full  rounded-[2rem] overflow-hidden flex flex-col md:flex-row items-center mb-12 shadow-xl border-4 border-white/10">
          <div className="flex-1 p-10 md:p-20">
            <h1 className="text-white text-8xl md:text-9xl font-black uppercase tracking-tighter leading-none">
              PASTA
            </h1>
          </div>
          <div className="flex-1 h-full">
            <img
              src="https://pngimg.com/uploads/pasta/pasta_PNG58.png"
              alt="Main Pizza"
              className="w-full h-full object-cover"
            />
          </div>
        </Banner>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pastas.map((item) => (
            <Card key={item.id}>
              <div className="relative rounded-[1.5rem] overflow-hidden bg-white/10 aspect-square mb-5 flex items-center justify-center p-4">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
                <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:scale-110 transition-transform cursor-pointer">
                  <Heart size={18} className="text-[#b91c1c]" />
                </button>
              </div>

              <div className="flex-1 px-1">
                <h3 className="font-black text-xl text-gray-900 mb-2 leading-tight uppercase italic">
                  {item.name}
                </h3>

                <p className="text-[15px] text-gray-800 font-medium leading-relaxed mb-6 line-clamp-3 h-12">
                  {item.desc}
                </p>

                <div className="mt-auto">
                  <div className="flex justify-between items-end mb-4">
                    <div>
                      <p className="text-[10px] text-gray-700 font-black uppercase tracking-tighter">
                        Price
                      </p>
                      <p className="font-black text-gray-900 text-2xl leading-none">
                        Rs. {item.price}
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

export default PastaSection;
