import React, { useState } from 'react';
import ProductCard from './components/ProductCard';

// Static data for products
const products = [
  {
    id: 1,
    name: "Laptop",
    description: "High-performance laptop for work and play.",
    image: "https://example.com/laptop.jpg",
    avgRating: 4.5,
    totalRatings: 10,
  },
  {
    id: 2,
    name: "Smartphone",
    description: "Sleek and fast smartphone with a high-quality camera.",
    image: "https://example.com/smartphone.jpg",
    avgRating: 4.0,
    totalRatings: 15,
  },
  {
    id: 3,
    name: "Headphones",
    description: "Noise-canceling headphones with superb sound quality.",
    image: "https://example.com/headphones.jpg",
    avgRating: 3.8,
    totalRatings: 8,
  }
];

function App() {
  const [productList, setProductList] = useState(products);

  // Handle rating submission for a product
  const handleRatingSubmit = (productId, newRating) => {
    const updatedProducts = productList.map(product => {
      if (product.id === productId) {
        const newAvgRating = (
          (product.avgRating * product.totalRatings + newRating) /
          (product.totalRatings + 1)
        ).toFixed(1);

        return {
          ...product,
          avgRating: parseFloat(newAvgRating),
          totalRatings: product.totalRatings + 1
        };
      }
      return product;
    });

    setProductList(updatedProducts);
  };

  return (
    <div className="app">
      <h1>Product Ratings</h1>
      {productList.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          onRatingSubmit={handleRatingSubmit}
        />
      ))}
    </div>
  );
}

export default App;
