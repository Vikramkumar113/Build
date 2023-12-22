import React from 'react';
import { BsCart4 } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { SiCarthrottle } from "react-icons/si";
import { useNavigate } from 'react-router-dom';
import { useHomePageContext } from '../Context/HomePageContext';

const Navbar = () => {
  const { toggleFilter, setSearch, toggleCart, cart } = useHomePageContext();
  const navigate = useNavigate();
  const handleLogout = ()=>{
      localStorage.removeItem('token');
      navigate("/login")
  }
  return (
    <div className="bg-black text-white">
      <ul className='flex justify-center space-x-10 items-center py-4'>
        <li className='text-3xl'><SiCarthrottle /></li>
        <li className='cursor-pointer' onClick={toggleFilter}>Filter</li>
        <li className='relative'>
           <input
              className='w-60 sm:w-96 px-4 py-1 border text-black border-gray-300 rounded'
              type="search"
              placeholder='Search'
              onChange={(e)=> setSearch(e.target.value)}
            />
          <button className='absolute right-0 top-0 px-3 py-2 bg-gray-800 text-white rounded' >
            <FaSearch />
          </button>
        </li>
        <li onClick={handleLogout}>Logout</li>
        <li className="relative text-3xl">
        <BsCart4 onClick={toggleCart} />
        <span className="bg-red-500 text-white text-sm rounded-full w-4 h-4 flex justify-center items-center absolute top-0 right-0">
         {cart.length}
       </span>
       </li>
      </ul>
    </div>
  );
};

export default Navbar;
