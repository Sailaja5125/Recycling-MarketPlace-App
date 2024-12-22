import React, { useState } from 'react';
import items from '../../data';
import OrderCard from './OrderCard';

export default function ProductCard({ category }) {
  const [form, setForm] = useState({});
  const [showOrderCard, setShowOrderCard] = useState(false);

  const handleClick = (product) => {
    const updatedForm = {
      name: product.name,
      category: product.category,
      price: product.price,
      about: product.about,
      image: product.image,
    };
    setForm(updatedForm);
    setShowOrderCard(true);
  };

  const handleClose = () => {
    setShowOrderCard(false);
  };

  return (
    <div className="relative">
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">{category}</h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {items.filter((product) => product.category === category).map((product) => (
              <div key={product.id} className="group relative">
                <img
                  alt={product.name}
                  src={product.image}
                  className="aspect-square w-full rounded-md bg-gray-200 object-fill group-hover:opacity-75 lg:aspect-auto lg:h-80"
                />
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      {product.name}
                    </h3>
                  </div>
                  <div className="price flex gap-2">
                    <p className="text-sm font-medium text-gray-900">{product.price}</p>
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/17301/17301413.png"
                      alt="points"
                      className="h-5 w-5"
                    />
                  </div>
                </div>
                <div className="buttons flex justify-around p-4 gap-5">
                  <button className="bg-c1 w-44 h-12 p-2 m-2 rounded-lg text-white font-bold cursor-pointer">
                    Cart
                  </button>
                  <button
                    className="border-solid border-c1 border-2 w-44 h-12 p-2 m-2 rounded-lg text-c1 font-bold cursor-pointer hover:bg-c1 hover:text-white"
                    onClick={() => handleClick(product)}
                  >
                    Buy
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {showOrderCard && <OrderCard form={form} onClose={handleClose} />}
    </div>
  );
}
