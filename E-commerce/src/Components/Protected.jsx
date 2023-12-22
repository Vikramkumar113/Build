import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Protected = (props) => {
  const { Component } = props;
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is logged in (token exists)
    const token = localStorage.getItem('token'); // Assuming you store the token in localStorage

    if (token) {
      //  validate the token on the server-side as well
      setIsLoggedIn(true);
    } else {
      // Redirect to the login page if the user is not logged in
      navigate('/login');
    }
  }, [navigate]);

  return (
    <>
     {  isLoggedIn && <Component />}
    </>
  )
};

export default Protected;
