import React, { createContext, useEffect, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('products.json');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log('Error al cargar los datos de productos:', error);
      }
    };

    fetchProducts();
  }, []);

  const getProductById = (productId) => {
    return products.find((product) => product.id === productId);
  };

  const getProductsByCategory = (category) => {
    return products.filter((product) => product.cat === category);
  };

  return (
    <ProductContext.Provider value={{ products, getProductById, getProductsByCategory }}>
      {children}
    </ProductContext.Provider>
  );
};
