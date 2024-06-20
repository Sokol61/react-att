import React from 'react';
import ProductList from '../components/ProductList';

const products = [
  // Пример товаров
  { id: 1, name: 'T-Shirt', price: 20, size: 'M', image: 'path/to/image' },
  { id: 2, name: 'Jeans', price: 50, size: 'L', image: 'path/to/image' },
  // Добавьте другие товары здесь
];

const Catalog = ({ onAddToCart }) => (
  <div>
    <h1>Catalog</h1>
    <ProductList products={products} onAddToCart={onAddToCart} />
  </div>
);

export default Catalog;
