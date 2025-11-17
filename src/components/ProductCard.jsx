import React from 'react';
import styles from '../styles/ProductCard.module.css';

// Apply conditional class to <div> above for out-of-stock items

//// Display product name
//// Display product price
//// Show if the product is in stock or out of stock
//// Remove a product if clicked

const ProductCard = ({ product, onRemoveProduct }) => {

  function handleRemoveClick(e) {
    if (onRemoveProduct) {
      onRemoveProduct(product, e);
    }
  };

  return (
    <>
      <div className={ `${ styles.productCardContainer } ${ product.inStock ? styles.inStock : styles.outOfStock } outOfStockClass`} >
        <h3>{ product.name }</h3>
        <p>Price: { product.price }</p>
        <p>{ product.inStock ? ' Available' : ' Out of Stock' } </p>
        <button onClick= { handleRemoveClick } > Remove </button>
      </div>
    </>
  );
};

export default ProductCard;
