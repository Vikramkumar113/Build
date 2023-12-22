import React, { createContext, useContext, useState } from 'react';

const HomePageContext = createContext();

export const HomePageProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [search, setSearch] = useState([]);
  const [priceRange, setPriceRange] = useState([10, 1500]);

  const toggleCart = () => {
    setShowCart(showCart => !showCart);
  };

  const toggleFilter = () => {
    setShowFilter(showFilter => !showFilter);
  };

  return (
    <HomePageContext.Provider
      value={{
        cart,
        setCart,
        showCart,
        toggleCart,
        showFilter,
        toggleFilter,
        search,
        setSearch,
        priceRange,
        setPriceRange,
      }}
    >
      {children}
    </HomePageContext.Provider>
  );
};

export const useHomePageContext = () => useContext(HomePageContext);
