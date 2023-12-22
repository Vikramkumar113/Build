import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HomePageProvider } from './Context/HomePageContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <HomePageProvider>
      <App />
    </HomePageProvider>
  </React.StrictMode>
)
