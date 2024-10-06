import React from 'react';
import Image from 'next/image';

const ProductCard = ({ title, description, imageUrl }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <Image src={imageUrl} alt={title} width={300} height={200} className="mb-4 rounded" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

const Products = () => {
  const products = [
    { title: 'Product 1', description: 'Description for Product 1', imageUrl: '/product1.jpg' },
    { title: 'Product 2', description: 'Description for Product 2', imageUrl: '/product2.jpg' },
    { title: 'Product 3', description: 'Description for Product 3', imageUrl: '/product3.jpg' },
  ];

  return (
    <section id="products" className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;