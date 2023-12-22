import React, { useState } from 'react'
import Navbar from './Navbar';
import Products from './Products';
import Cart from './Cart';
import Filter from './Filter';
import { useHomePageContext } from '../Context/HomePageContext';


const HomePage = () => {
  const { showCart, showFilter} = useHomePageContext();
  return (
    <div>
      <Navbar  />
      <Products/>
      {showCart && (
        <div className="fixed top-0 right-0 p-4">
          <Cart />
        </div>
      )}

     {
       showFilter && (
         <div className='fixed top-12 left-[400px]'>
            <Filter/>
         </div>
       )
     }
    </div>
  )
}

export default HomePage


