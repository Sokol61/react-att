import React, { useState } from 'react';
import Product from './Product';

const ProductList = ({ products, onAddToCart }) => {
  const [filter, setFilter] = useState('');

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    filter ? product.size === filter : true
  );

  return (
    <div>
      <select onChange={handleFilterChange} value={filter}>
        <option value="">All Sizes</option>
        <option value="XS">XS</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
      </select>
      <div className="product-list">
        {filteredProducts.map((product) => (
          <Product key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
