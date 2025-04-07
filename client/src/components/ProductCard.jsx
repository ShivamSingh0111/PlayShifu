import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-yellow-800 mb-2">{product.name}</h2>
        <p className="text-gray-600 mb-3">{product.description}</p>
        <div className="text-lg font-bold text-green-600">₹{product.price}</div>
      </div>
    </div>
  );
};

export default ProductCard;
