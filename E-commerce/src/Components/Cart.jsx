import React, { useState } from 'react';
import { LiaRupeeSignSolid } from 'react-icons/lia';
import { useHomePageContext } from '../Context/HomePageContext';

const Cart = () => {
  const { cart } = useHomePageContext()
  const [itemQuantities, setItemQuantities] = useState({});

  const handleQuantityChange = (itemId, change) => {
    setItemQuantities((prevQuantities) => {
      const updatedQuantities = { ...prevQuantities };
      updatedQuantities[itemId] = (updatedQuantities[itemId] || 0) + change;
      return updatedQuantities;
    });
  };

  const calculateSubtotal = (item) => {
    const quantity = itemQuantities[item.id] || 0;
    return item.price * quantity;
  };

  return (
    <div className="bg-black text-white p-4 rounded-md">
      <h2 className="text-2xl font-bold mb-4">Your Cart Items</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="border-b py-2">
              <div className="mx-5 my-2">
                <div className='flex justify-between items-center'>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
                <div className="flex items-center space-x-8">
                  <div className="w-16">
                    <p className="text-gray-600 flex items-center">
                      <LiaRupeeSignSolid />
                      {item.price}
                    </p>
                  </div>
                  <div className=" w-16 flex items-center">
                    <button
                      className="text-white text-2xl"
                      onClick={() => handleQuantityChange(item.id, -1)}
                    >
                      -
                    </button>
                    <span className="mx-2">{itemQuantities[item.id] || 0}</span>
                    <button
                      className="text-white text-2xl"
                      onClick={() => handleQuantityChange(item.id, 1)}
                    >
                      +
                    </button>
                  </div>
                  <div>
                    <p className="text-right flex items-center ">
                      <LiaRupeeSignSolid /> {calculateSubtotal(item)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <p className="text-xl font-semibold mt-4">
            Subtotal :
            <span className="text-yellow-400 flex items-center">
              <LiaRupeeSignSolid />
              {cart.reduce((total, item) => total + calculateSubtotal(item), 0)}
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Cart;
