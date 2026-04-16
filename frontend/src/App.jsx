import { Routes, Route } from "react-router-dom";
import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";

import Menu from "./Components/Menu/Menu";
import AboutUs from "./Components/Pages/About";
import ContactUs from "./Components/Pages/Contact";
import Login from "./Components/Authentication/Login";
import Signup from "./Components/Authentication/Signup";
function App() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
