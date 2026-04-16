import React, { useState } from "react";
import { User, Mail, Lock, Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Name is required";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (formData.phone.length < 10) {
      newErrors.phone = "Enter a valid phone number";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Min 6 characters required";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      Swal.fire({
        title: "Success!",
        text: "Your account has been created successfully.",
        icon: "success",
        confirmButtonColor: "#D44A1C",
        background: "#ffffff",
        borderRadius: "20px",
        customClass: {
          popup: "rounded-[2rem]",
          confirmButton: "rounded-xl px-8 py-3 uppercase font-bold",
        },
      });

      console.log("Form Submitted Successfully", formData);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-[#f3e3dc]"
      style={{
        backgroundImage: `url("https://www.transparenttextures.com/patterns/food.png")`,
        backgroundSize: "400px",
      }}
    >
      <div className="max-w-4xl w-full flex flex-col md:flex-row bg-white rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.2)] border-4 border-white">
        <div className="hidden md:flex md:w-1/2 bg-[#004B3E] p-12 flex-col justify-between relative overflow-hidden">
          <div className="z-10">
            <h2 className="text-white text-5xl font-black uppercase italic tracking-tighter leading-none mb-4">
              Join the <br />
              <span className="text-yellow-400">Zesty</span> Family
            </h2>
            <p className="text-white/80 font-bold text-lg">
              Signup now and get exclusive discounts on your favorite crust!
            </p>
          </div>

          <img
            src="https://www.pngall.com/wp-content/uploads/2018/04/Pasta-PNG-Image.png"
            alt="Food"
            className="absolute -bottom-10 -right-10 w-80 h-80 object-contain rotate-12 drop-shadow-2xl opacity-40 hover:scale-110 transition-transform duration-700"
          />
        </div>

        <div className="w-full md:w-1/2 p-8 md:p-12 bg-white">
          <div className="text-center md:text-left mb-8">
            <h3 className="text-3xl font-black uppercase italic text-gray-900 tracking-tighter">
              Create <span className="text-[#D44A1C]">Account</span>
            </h3>
            <p className="text-gray-500 font-bold text-sm uppercase tracking-widest mt-2">
              Start your food journey today
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="relative group">
              <User
                className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${errors.fullName ? "text-red-500" : "text-gray-400 group-focus-within:text-[#D44A1C]"}`}
                size={20}
              />
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                className={`w-full pl-12 pr-4 py-4 bg-gray-100 border-2 rounded-2xl outline-none font-bold transition-all ${errors.fullName ? "border-red-500 focus:bg-white" : "border-transparent focus:border-[#D44A1C] focus:bg-white"}`}
              />
              {errors.fullName && (
                <p className="text-red-500 text-xs mt-1 ml-2 font-bold">
                  {errors.fullName}
                </p>
              )}
            </div>

            <div className="relative group">
              <Mail
                className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${errors.email ? "text-red-500" : "text-gray-400 group-focus-within:text-[#D44A1C]"}`}
                size={20}
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className={`w-full pl-12 pr-4 py-4 bg-gray-100 border-2 rounded-2xl outline-none font-bold transition-all ${errors.email ? "border-red-500 focus:bg-white" : "border-transparent focus:border-[#D44A1C] focus:bg-white"}`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1 ml-2 font-bold">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="relative group">
              <Phone
                className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${errors.phone ? "text-red-500" : "text-gray-400 group-focus-within:text-[#D44A1C]"}`}
                size={20}
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className={`w-full pl-12 pr-4 py-4 bg-gray-100 border-2 rounded-2xl outline-none font-bold transition-all ${errors.phone ? "border-red-500 focus:bg-white" : "border-transparent focus:border-[#D44A1C] focus:bg-white"}`}
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1 ml-2 font-bold">
                  {errors.phone}
                </p>
              )}
            </div>

            <div className="relative group">
              <Lock
                className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${errors.password ? "text-red-500" : "text-gray-400 group-focus-within:text-[#D44A1C]"}`}
                size={20}
              />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className={`w-full pl-12 pr-4 py-4 bg-gray-100 border-2 rounded-2xl outline-none font-bold transition-all ${errors.password ? "border-red-500 focus:bg-white" : "border-transparent focus:border-[#D44A1C] focus:bg-white"}`}
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1 ml-2 font-bold">
                  {errors.password}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-[#D44A1C] text-white py-4 rounded-2xl font-black uppercase tracking-[0.2em] shadow-lg shadow-orange-200 hover:bg-[#D44A3C] hover:shadow-none transition-all flex items-center justify-center gap-3 active:scale-95 cursor-pointer mt-6"
            >
              Create Account
              <ArrowRight size={20} />
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-600 font-bold text-sm">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-[#D44A1C] hover:underline tracking-tighter"
              >
                Login Here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
