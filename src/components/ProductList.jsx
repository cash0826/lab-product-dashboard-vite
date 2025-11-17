import React from 'react';
import ProductCard from './ProductCard'; 

const ProductList = (props) => {
  // TODO: Check if the product list is empty and display a message if needed
  const products = props.products || [];
  const onRemoveProduct = props.onRemoveProduct;

  return (
    <div>
      {/* TODO: Iterate over the products array and render a ProductCard for each product */}
      {products.map((product) => <ProductCard key={product.id} product={product} onRemoveProduct={onRemoveProduct} /> )}
    </div>
  );
};

export default ProductList;