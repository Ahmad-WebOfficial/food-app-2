import React from "react";
import { ShoppingBag, Heart } from "lucide-react";
import Button from "../../Utils/Button";
import Card from "../../Utils/Card";
import Banner from "../../Utils/Banner";

const PizzaSection = () => {
  const pizzas = [
    {
      id: 1,
      category: "Royal Crust",
      name: "Kabab Stuffer",
      price: "1,570.00",
      desc: "Bold and Flavorful! Our Special Sauce Tops and Coats the Base, With a Crust Stuffed With Marinated Seekh Kabab and Secret Sauce.",
      img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=400",
    },
    {
      id: 2,
      category: "Royal Crust",
      name: "Super Delight",
      price: "1,350.00",
      desc: "Our house special signature pizza with premium toppings and extra cheese.",
      img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=400",
    },
    {
      id: 3,
      category: "Local Treats",
      name: "Malai Boti Pizza",
      price: "1,480.00",
      desc: "Smooth and Savory! Our Special Sauce on the Base, Topped With Creamy Malai Boti, Melted Cheese, Fresh Tomato, and a Hint of Jalapenos.",
      img: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=400",
    },
    {
      id: 4,
      category: "Local Treats",
      name: "Fajita Pizza",
      price: "580.00",
      desc: "Bold and Satisfying! Our Special Sauce Base Topped With Juicy Tikka Chunks, Fresh Onion & Crisp Capsicum.",
      img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=400",
    },
    {
      id: 5,
      category: "Specialty",
      name: "Crown Crust",
      price: "1,650.00",
      desc: "A unique crust with mini-crowns filled with cheese or kabab for a royal experience.",
      img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=400",
    },
    {
      id: 6,
      category: "Specialty",
      name: "Cheese Lover",
      price: "1,100.00",
      desc: "A heavenly blend of mozzarella, cheddar, and parmesan for ultimate cheese fans.",
      img: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=400",
    },
    {
      id: 7,
      category: "Classic Spicy",
      name: "Hot & Spicy",
      price: "630.00",
      desc: "Red chili flakes, jalapeños, and spicy chicken for those who love a real kick.",
      img: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=400",
    },
    {
      id: 8,
      category: "Classic Spicy",
      name: "Chicken Tikka",
      price: "580.00",
      desc: "Simple but Flavorful! Special Sauce on the Base, Topped With Tender Tikka Chicken and Melted Cheese.",
      img: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=400",
    },
  ];

  return (
    <section
      className="w-full py-10 "
      style={{
        backgroundImage: `url("https://www.transparenttextures.com/patterns/food.png")`,
        backgroundSize: "400px",
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter text-gray-900">
            Our <span className="text-[#b91c1c]">Pizza</span>
          </h2>
          <div className="w-16 md:w-20 h-2 bg-[#b91c1c] mx-auto mt-4 rounded-full"></div>
        </div>

        <Banner className="w-full rounded-[1.5rem] md:rounded-[2rem] overflow-hidden flex flex-col md:flex-row items-center mb-12 shadow-xl border-4 border-white/10">
          <div className="flex-1 p-8 md:p-20">
            <h1 className="text-white text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none">
              PIZZA
            </h1>
          </div>
          <div className="flex-1 h-48 md:h-full w-full">
            <img
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800"
              alt="Main Pizza"
              className="w-full h-full object-cover"
            />
          </div>
        </Banner>

        {/* Mobile: grid-cols-2 | Large: lg:grid-cols-4 */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {pizzas.map((pizza) => (
            <Card key={pizza.id} className="p-2 md:p-4">
              <div className="relative rounded-[0.8rem] md:rounded-[1rem] overflow-hidden aspect-square mb-3">
                <img
                  src={pizza.img}
                  alt={pizza.name}
                  className="w-full h-full object-cover"
                />
                <button className="absolute top-2 right-2 bg-white p-1 md:p-1.5 rounded-full shadow-md hover:scale-110 transition-transform">
                  <Heart size={14} className="text-gray-900 md:w-4 md:h-4" />
                </button>
              </div>

              <div className="flex-1 px-1 flex flex-col">
                <h3 className="font-black text-xs md:text-lg text-white mb-1 leading-tight line-clamp-1">
                  {pizza.name}
                </h3>
                <p className="text-[11px] md:text-[15px] text-gray-400 font-medium leading-tight md:leading-relaxed mb-3 line-clamp-2 h-7 md:h-12">
                  {pizza.desc}
                </p>

                <div className="mt-auto">
                  <p className="font-black text-white text-sm md:text-2xl mb-2">
                    Rs. {pizza.price}
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

export default PizzaSection;