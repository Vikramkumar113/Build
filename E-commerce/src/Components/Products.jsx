import React, { useState, useEffect } from 'react';
import { LiaRupeeSignSolid } from "react-icons/lia";
import { useHomePageContext } from '../Context/HomePageContext';

const Products = () => {
  const { cart, setCart, setCartSize, search, priceRange } = useHomePageContext();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the API
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
       
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const handleAddToCart = (productId) => {
    // Find the product with the given productId
    const productToAdd = products.find((product) => product.id === productId);

    // Check if the product is already in the cart
    const isProductInCart = cart.some((item) => item.id === productId);

    if (productToAdd && !isProductInCart) {
      // Add the product to the cart
      setCart([...cart, productToAdd]);
      setCartSize(cart.length + 1);
    } else {
      console.log(`Product with ID ${productId} is already in the cart.`);
    }
  };

  

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products
          .filter((item) => {
            const lowercaseSearch = search && typeof search === 'string' ? search.toLowerCase() : '';
            return (
              (lowercaseSearch === '' || item.title.toLowerCase().includes(lowercaseSearch)) &&
              item.price >= priceRange[0] &&
              item.price <= priceRange[1]
            );
          })
          .map((product) => (
            <div key={product.id} className="border p-4 rounded-md">
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-full h-48 object-contain"
              />
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-gray-600 flex items-center">
                <LiaRupeeSignSolid />
                {product.price}
              </p>
              <button
                onClick={() => handleAddToCart(product.id)}
                className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-md hover:bg-blue-600"
              >
                Add to Cart
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Products;
