# E-commerce 

A simple E-commerce site with search and filter functionality based on product name and price range and functionality to add to cart product items,  and the security of protected routes, ensuring exclusive access for logged-in users. 

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)

## Introduction
This project serves as a boilerplate for implementing user authentication using the MERN stack. It provides a solid foundation for developers looking to integrate authentication features into their web applications.

## Features
- Login process using (https://dummyjson.com/docs/auth)
  for login use any dummy data from this API (https://dummyjson.com/users) 
- Saving the login token for authorization purpose.
- Home page as protected Route (only logged in users allowed)
- Fetch products on home page ( https://dummyjson.com/docs/products)
- Search and filter products based on product name and price
- Implement a cart and show the cart count on the top with the total amount of the cart

## Prerequisites
Before you begin, ensure you have the following installed:
- [React + Vite with javascript](https://vitejs.dev/guide/)
- [Tailwind CSS](https://tailwindcss.com/docs/guides/vite)

## Installation
1. Clone the repository
    ```bash
    git clone https://github.com/Vikramkumar113/E-commerce
    ```

2. Install dependencies
    ```bash
    cd E-commerce
    npm install
    ```

### Usage
#### Start the App
```bash
cd E-commerce
npm run dev
```

## Technologies Used
- React + Vite
- Tailwind CSS

## Contribution
Contributions are welcome! 

- If you find any bug in the application, or a feature you think would be nice to have, please open an issue.
- If you want to contribute code, please fork the project and submit a pull request.
- If you are contributing for the first time, you can find more information [here.](https://www.freecodecamp.org/news/how-to-contribute-to-open-source-projects-beginners-guide/) It contains all the information about making the changes and submitting the pull request.
