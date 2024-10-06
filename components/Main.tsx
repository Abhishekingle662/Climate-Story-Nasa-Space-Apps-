import React from 'react';
import Image from 'next/image';

const Main = () => {
  return (
    <section id="main" className="bg-blue-50 py-20">
      <div className="container mx-auto flex items-center justify-between">
        <div className="w-1/2">
          <h1 className="text-5xl font-bold mb-4">Welcome to YourBrand</h1>
          <p className="text-xl mb-8">Discover our amazing products and services.</p>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300">
            Get Started
          </button>
        </div>
        <div className="w-1/2">
          <Image src="/hero-image.jpg" alt="Hero Image" width={500} height={400} />
        </div>
      </div>
    </section>
  );
};

export default Main;