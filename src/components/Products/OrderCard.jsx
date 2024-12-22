import React, { useState } from 'react';
import { appwriteService } from '../../Appwrite/app_write';

export default function OrderCard({ form, onClose }) {
  const [quantity, setQuantity] = useState(1);
  const [products, setProducts] = useState([]);

  const handleSubmit = async (evt) => {
    evt.preventDefault(); // Prevent default form submission
    try {
      const user = await appwriteService.getCurrentUser();
      const email = user.email;
      const item = { ...form };

      const updatedProducts = [...products, { item, quantity }];
      setProducts(updatedProducts);

      const orderData = {
        email,
        products: updatedProducts
      };

      // Post the order data to the API
      const response = await fetch('http://localhost:8800/api/order/createOrder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      const result = await response.json();
      console.log('Order created:', result);
      if(result.message==="Coins are not sufficient"){
        alert("Coins are not sufficient");
      }

    } catch (error) {
      console.error('Error while creating order:', error);
    }
  };

  const handleChange = (evt) => {
    setQuantity(evt.target.value);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="modal w-fit h-fit bg-white shadow-lg rounded-2xl max-w-xl relative">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          X
        </button>
        <form className="form flex flex-col gap-5 p-5" onSubmit={handleSubmit}>
          <div className="credit-card-info--form flex flex-col gap-4">
            <div className="input_container flex flex-col gap-1">
              <label className="input_label text-xs text-gray-600 font-semibold" htmlFor="name_field">Product Name</label>
              <input
                value={form.name}
                title="Product Name"
                name="name"
                type="text"
                className="input_field w-full h-10 px-4 rounded-lg outline-none bg-gray-200 border transition-all duration-300 ease-in-out"
                id="name_field"
                readOnly
              />
            </div>
            <div className="input_container flex flex-col gap-1">
              <label className="input_label text-xs text-gray-600 font-semibold" htmlFor="category_field">Category</label>
              <input
                value={form.category}
                title="Category"
                name="category"
                type="text"
                className="input_field w-full h-10 px-4 rounded-lg outline-none bg-gray-200 border transition-all duration-300 ease-in-out"
                id="category_field"
                readOnly
              />
            </div>
            <div className="input_container flex flex-col gap-1">
              <label className="input_label text-xs text-gray-600 font-semibold" htmlFor="quantity_field">Quantity</label>
              <input
                placeholder="Enter quantity"
                title="Quantity"
                name="quantity"
                type="number"
                className="input_field w-full h-10 px-4 rounded-lg outline-none bg-gray-200 border transition-all duration-300 ease-in-out"
                id="quantity_field"
                onChange={handleChange}
                value={quantity}
                min="1"
              />
            </div>
            <button type="submit" className="purchase--btn w-full h-14 bg-gradient-to-b from-gray-800 via-gray-700 to-black text-white font-bold rounded-lg transition-all duration-300 ease-in-out hover:shadow-lg">
              Checkout
            </button>
            <div className="separator flex items-center justify-center w-full gap-2 text-gray-500 my-4">
              <hr className="line flex-grow border-gray-200"/>
              <p className="text-xs font-semibold">or pay using e-wallet</p>
              <hr className="line flex-grow border-gray-200"/>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
