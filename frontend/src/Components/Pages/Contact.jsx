import React, { useState, useEffect } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => setShowPopup(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = true;
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = true;
    if (!formData.message.trim()) newErrors.message = true;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setShowPopup(true);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  const mainBgStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url("https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2000&auto=format&fit=crop")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  };

  return (
    <div
      style={mainBgStyle}
      className="relative min-h-screen text-white font-sans selection:bg-orange-500 selection:text-white"
    >
      {showPopup && (
        <div className="fixed top-30 left-1/2 -translate-x-1/2 z-50 animate-bounce">
          <div className="bg-orange-600 text-white px-8 py-4 rounded-2xl shadow-2xl border-2 border-white/20 flex items-center gap-3">
            <div className="bg-white text-orange-600 rounded-full p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <span className="font-black uppercase tracking-widest text-sm">
              Message Sent Successfully!
            </span>
          </div>
        </div>
      )}

      <section className="py-28 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black uppercase italic tracking-tighter mb-4">
            Contact <span className="text-orange-500">Us</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl font-medium max-w-xl mx-auto">
            Your feedback is important to us. Delight Crust is always at your
            service!
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10 flex items-start gap-5 hover:border-orange-500 transition-all">
              <div className="bg-orange-500 p-3 rounded-xl text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <h4 className="font-black text-orange-400 text-[10px] uppercase tracking-widest">
                  Help Line
                </h4>
                <p className="text-lg font-black italic">044-2635400</p>
                <p className="text-lg font-black italic">049-4424400</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10 flex items-start gap-5 hover:border-yellow-500 transition-all">
              <div className="bg-yellow-500 p-3 rounded-xl text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <h4 className="font-black text-yellow-400 text-[10px] uppercase tracking-widest">
                  Our Outlet
                </h4>
                <p className="text-lg font-black italic uppercase leading-tight">
                  G.T Road, Renala Khurd & Pattoki
                </p>
              </div>
            </div>

            <div className="bg-orange-600 p-8 rounded-3xl shadow-xl text-white">
              <div className="flex items-center gap-3 mb-4 text-white font-black uppercase text-xs tracking-widest">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span>Timings</span>
              </div>
              <p className="text-sm font-bold text-orange-100">Open Daily</p>
              <p className="text-xl font-black italic">12:00 PM - 02:00 AM</p>
            </div>
          </div>

          <div className="lg:col-span-8 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl text-gray-800">
            <h2 className="text-3xl font-black uppercase italic mb-8 border-b-4 border-orange-500 inline-block">
              Send Message
            </h2>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase text-gray-400 ml-2">
                    Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className={`w-full bg-gray-50 border-2 ${errors.name ? "border-red-500" : "border-transparent"} focus:border-orange-500 p-4 rounded-2xl outline-none font-bold transition-all`}
                    placeholder="Your Name"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase text-gray-400 ml-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className={`w-full bg-gray-50 border-2 ${errors.email ? "border-red-500" : "border-transparent"} focus:border-orange-500 p-4 rounded-2xl outline-none font-bold transition-all`}
                    placeholder="Email Address"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase text-gray-400 ml-2">
                  Message
                </label>
                <textarea
                  rows="4"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className={`w-full bg-gray-50 border-2 ${errors.message ? "border-red-500" : "border-transparent"} focus:border-orange-500 p-4 rounded-2xl outline-none font-bold transition-all resize-none`}
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white py-5 rounded-2xl font-black uppercase tracking-widest transition-all shadow-lg flex items-center justify-center gap-3"
              >
                Send Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </section>

      <div className="text-center py-10 bg-black/20 backdrop-blur-sm mt-10">
        <p className="text-gray-400 font-bold uppercase text-[10px] tracking-[0.3em] mb-4">
          Follow Delight Crust
        </p>
        <div className="flex justify-center gap-8 text-white">
          <span className="hover:text-orange-500 cursor-pointer font-black italic">
            INSTAGRAM
          </span>
          <span className="hover:text-orange-500 cursor-pointer font-black italic text-orange-500">
            |
          </span>
          <span className="hover:text-orange-500 cursor-pointer font-black italic">
            FACEBOOK
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
