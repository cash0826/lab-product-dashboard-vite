import React, { useState } from 'react';
import ProductList from './components/ProductList';

const App = () => {
  // TODO: Define initial product data

  const defaultProducts = [
    { id: 1, name: 'Phone', price: '$1000', inStock: false },
    { id: 2, name: 'Tablet', price: '$1200', inStock: true },
    { id: 3, name: 'Laptop', price: '$1400', inStock: true },
  ]

  // TODO: Implement state to manage filtering
  const [ filterStatus, setfilterStatus] = useState('all');
  const [ products, setProducts ] = useState(defaultProducts)

  function onRemoveProduct(product) {
    setProducts((previous) => previous.filter(p => p.id !== product.id ))
  }

  // TODO: Implement logic to filter products based on availability

  const filteredProducts = products.filter(product => {
    if (filterStatus === 'inStock') {
      return product.inStock === true;
    } 
    if (filterStatus === 'outOfStock') {
      return product.inStock === false;
    }
    if (filterStatus === 'all') {
      return true;
    }
  });

  const showAll = () => setfilterStatus('all');
  const showInStock = () => setfilterStatus('inStock');
  const showOutOfStock = () => setfilterStatus('outOfStock');

  return (
    <div>
      <header>
        <h1>Product Dashboard</h1>
      </header>

      {/* TODO: Add buttons to allow filtering by availability */}
      <div>
        <button onClick={showAll}>Show All</button>
        <button onClick={showInStock}>Show Available</button>
        <button onClick={showOutOfStock}>Show Out Of Stock</button>
      </div>

      <ProductList products= { filteredProducts } onRemoveProduct={onRemoveProduct} />

    </div>
  );
};

export default App;
