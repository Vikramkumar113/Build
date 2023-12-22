import React from 'react';
import { BrowserRouter as Router,Routes,  Route } from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import HomePage from "./Components/HomePage"
import Protected from './Components/Protected';


 function App(){
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Protected Component={HomePage} />} /> 
          <Route path="/login" element={<LoginPage />} />
        </Routes>
    </Router>
    </>
  )
}

export default App


// Option 2
// You can submit a short assignment 

// 1. Implement Login process using (https://dummyjson.com/docs/auth),
// 2. Save the login token for authorization purpose.
// 3. Make Home page as protected Route (only logged in users allowed).
// 4. Fetch products on home page ( https://dummyjson.com/docs/products)
// 5. Add a search on the page to search products based on their name
// 6. Add a filter option on the home page based on price
// 7. Implement a cart and show the cart count on the top with the total amount of the cart
// 8. Create add to cart button on product cards.