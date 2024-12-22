import React, { useEffect, useState } from "react";
import { appwriteService } from "../../Appwrite/app_write";
import img from "../images/recyclelogo.png";
import { useNavigate } from "react-router-dom";

export default function Orders({ rewards }) {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  // Logout function
  const logout = async () => {
    try {
      await appwriteService.logout();
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };
  // Fetch orders data
  const fetchData = async () => {
    try {
      const user = await appwriteService.getCurrentUser();
      const response = await fetch(
        "http://localhost:8800/api/order/getOrders",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: user?.email }),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log("User Email:", user.email);
      console.log(result.orders[0].products[0].item)

      setTotalPrice(result.orders[0].total_price);
      const dataArray = [];
      dataArray.push(result.orders[0].products[0].item);
      setData(dataArray);
      console.log(data);
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  // UseEffect to fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <nav className="flex justify-between m-4 items-center">
        <div>
          <img src={img} alt="Logo" className="w-24 h-24" />
        </div>
        <div className="flex justify-evenly gap-8 items-center">
          <a href="/main" className="text-gray-500 mr-4 text-xl font-semibold">
            Home
          </a>
          <a
            href="/product"
            className="text-gray-500 mr-4 text-xl font-semibold"
          >
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

      {/* Sub Navbar */}
      <div className="flex justify-end m-4 items-center border-b-2 pb-2">
        <a href="#" className="text-c1 mr-4 text-xl font-semibold">
          Cart
        </a>
        <a href="/orders" className="text-c1 mr-4 text-xl font-semibold">
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
            <h1 className="text-center font-bold text-gray-400">
              {rewards || "0"}
            </h1>
          </div>
        </div>
      </div>

      {/* Orders Section */}
      <div className="container flex w-screen h-screen justify-center items-center">
        <div className="grid gap-5">
          {/* Your Orders */}
          <div className="bg-white shadow-lg rounded-tl-2xl rounded-tr-2xl rounded-bl-lg rounded-br-lg p-4">
            <label className="block text-gray-600 font-bold text-xl mb-2">
              Your Orders
            </label>
            {data.length > 0 ? (
              data.map((order, index) => (
                <div key={index} className="flex flex-col p-2">
                  <div className="grid grid-cols-[60px_1fr_80px] gap-2 items-center">
                    {/* Placeholder for order image */}
                    <img
                      src={order.image || "#"}
                      alt={order.name}
                      className="w-full h-auto"
                    />
                    <div>
                      <span className="text-gray-800 font-semibold text-sm">
                        {order.name}
                      </span>
                      <p className="text-gray-500 text-xs">{order.about}</p>
                    </div>
                    <div className="flex gap-2">
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/17301/17301413.png"
                        alt="points"
                        className="h-5 w-5"
                      />
                      <label className="text-gray-800 text-sm">
                        ${order.price}
                      </label>
                    </div>
                  </div>
                  <button className="bg-gradient-to-b from-blue-500 to-blue-700 text-white font-semibold py-2 px-4 rounded shadow transition duration-300 ease-in-out hover:shadow-lg">Cancel Order</button>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No orders found.</p>
            )}
          </div>

          {/* Checkout Section */}
          <div className="bg-white shadow-lg rounded-tl-lg rounded-tr-lg rounded-bl-2xl rounded-br-2xl p-4">
            {/* Total and Checkout Button */}
            <div className="flex justify-between items-center bg-gray-200 p-4 mt-4 rounded-b-lg">
              <button
                className="bg-gradient-to-b from-blue-500 to-blue-700 text-white font-semibold py-2 px-4 rounded shadow transition duration-300 ease-in-out hover:shadow-lg"
                onClick={() => alert("Proceeding to checkout...")} // Replace with actual checkout logic
              >
                Total Price
              </button>
              <label className="text-blue-900 font-black text-xl">
                {totalPrice}
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
