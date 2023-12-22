import React from 'react';
import { useHomePageContext } from '../Context/HomePageContext';

const Filter = () => {
  const {priceRange, setPriceRange} = useHomePageContext()
  return (
    <div className='bg-black p-2'>
      <h2 className=" text-white text-xl font-semibold mb-2">Filter by Price</h2>
      <div className="text-white flex items-center space-x-4">
        <label htmlFor="priceRange">Price Range:</label>
        <input
          type="range"
          id="priceRange"
          min="10"
          max="1500"
          step="1"
          value={priceRange[1]}
          onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value, 10)])}

        />
        <span>{priceRange[1]}</span>
      </div>
    </div>
  );
};

export default Filter;
