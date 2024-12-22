import React, { useEffect } from "react";
import { appwriteService } from "../../Appwrite/app_write";
import img from "../images/recyclelogo.png";
import { useNavigate } from "react-router-dom";
import items from "../../data";
// Import Swiper JS
import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // Import autoplay CSS
import ProductCard from "./ProductCard";

export default function Product({ rewards }) {
  const navigate = useNavigate();

  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      // Optional parameters
      direction: "horizontal",
      loop: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true, // Pause autoplay on mouse enter
      },
      speed: 1000, // Transition speed
      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
        clickable: true, // Make pagination dots clickable
      },
      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      // And if we need scrollbar
      scrollbar: {
        el: ".swiper-scrollbar",
      },
      modules: [Navigation, Pagination, Autoplay], // Include Autoplay module
    });

    return () => {
      // Clean up Swiper instance on unmount
      if (swiper.destroy) swiper.destroy();
    };
  }, []);

  const logout = async () => {
    try {
      await appwriteService.logout();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="flex justify-between m-4 items-center">
        <div>
          <img src={img} alt="Logo" className="w-24 h-24" />
        </div>
        <div className="flex justify-evenly gap-8 items-center">
          <a href="/main" className="text-gray-500 mr-4 text-xl font-semibold">
            Home
          </a>
          <a href="/product" className="text-gray-500 mr-4 text-xl font-semibold">
            Products
          </a>
          <a href="#" className="text-gray-500 mr-4 text-xl font-semibold">
            About us
          </a>
          <a href="#" className="text-gray-500 mr-4 text-xl font-semibold">
            Contact us
          </a>
          <button
            className="w-44 h-14 bg-c1 m-0 text-center font-semibold rounded-lg text-white text-xl"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      </nav>
      
      {/* /* Sub Navbar */}
      <div className="flex justify-end m-4 items-center border-b-2 pb-2">
        <a href="#" className="text-c1 mr-4 text-xl font-semibold">
          Cart
        </a>
        <a href="/orders" className="text-c1 mr-4 text-xl font-semibold ">
          Orders
        </a>
        <div className="flex justify-evenly w-44">
            <h1 className="text-center font-bold text-gray-400">Rewards</h1>
            <div className="flex gap-3">
              <img
                src="https://cdn-icons-png.flaticon.com/128/17301/17301413.png"
                alt="points"
                className="h-5 w-5"
              />
              <h1 className="text-center font-bold text-gray-400">{rewards ? rewards : "0"}</h1>
            </div>
          </div>
      </div> 

      {/* Slider */}
      <div className="flex justify-center" style={{ height: "60vh", width: "100%" }}>
        <div className="swiper" style={{ height: "60vh", width: "100%", padding: "4px" }}>
          <div className="swiper-wrapper">
            <div className="swiper-slide" style={{ margin: 0, padding: 0 }}>
              <img
                src="https://i.etsystatic.com/19887624/r/il/70e6d0/2022652057/il_fullxfull.2022652057_qctg.jpg"
                alt=""
                className="h-full w-full object-fill rounded-3xl"
              />
            </div>
            <div className="swiper-slide" style={{ margin: 0, padding: 0 }}>
              <img
                src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQtlrO1sc4egJZflqvDr-bxPwv8eX443IyXeFa8B4Til2uJByAGoaT_ude5M67WG06yNH1XOdK-KrcE9YPhEGlg64PsBrzFIFk_xbEGU6k&usqp=CAE"
                alt=""
                className="h-full w-full object-fill rounded-3xl"
              />
            </div>
            <div className="swiper-slide" style={{ margin: 0, padding: 0 }}>
              <img
                src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTNuWYHxwPlAY3ktyJx1EmKJRmxfrDibLRVUhAYR29pplBTQ3j2HCmzp9bvY9GIigt1dreO7Hty9Z9ZHclXiru4Woaj_7X0G25aB_pJrxlkUlQdVyksBbT4mRD9&usqp=CAE"
                alt=""
                className="h-full w-full object-fill rounded-3xl"
              />
            </div>
          </div>
          <div className="swiper-pagination"></div>
          <div className="swiper-scrollbar"></div>
        </div>
      </div>
      
      {/* Products List */}
      <div className="productsList">
        <ProductCard category={"Gift"}/>
        <ProductCard category={"Decoratives"}/>
        <ProductCard category={"Toys"}/>
        <ProductCard category={"Accessories"}/>
        <ProductCard category={"Essentials"}/>
      </div>
    </div>
    );
}