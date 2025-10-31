import React from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const App = () => {
  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial' }}>
      <h1>My Shop</h1>
      <ProductList />
      <Cart />
    </div>
  );
};

export default App;
