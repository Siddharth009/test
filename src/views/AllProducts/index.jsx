/* eslint-disable no-unused-vars */
import React from 'react';
import allProducts from '@Assets/data/productData';
import ProductCard from '@Components/AllProducts/ProductCard/index';

function Dashboard() {
  return (
    <div className="container">
      {allProducts && allProducts.length
        ? allProducts.map((product) => {
            const { id } = product;
            return <ProductCard product={product} key={id} />;
          })
        : 'Products not available'}
    </div>
  );
}

export default Dashboard;
