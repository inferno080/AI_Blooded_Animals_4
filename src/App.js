import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData, productDataTwo } from './components/Products/data';
import Feature from './components/Feature';
import KommunicateChat from './chat';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='Choose your Favourite Fruits and Veggies' data={productData} />
      <Feature />
      <Products heading='Sweet Deals for You' data={productDataTwo} />
      <Footer />
      <KommunicateChat/>
    </Router>
  );
}

export default App;
