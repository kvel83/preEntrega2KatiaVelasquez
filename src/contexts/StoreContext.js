import React, { createContext, useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  //PRODUCTOS
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsRef = collection(db, "products");
        const dataFirebase = await getDocs(productsRef);
        const productsMap = dataFirebase.docs.map((doc) => {
                              return {...doc.data(), id: doc.id}
                            })
        setProducts(productsMap);
      } catch (error) {
        console.error('Error al cargar los datos de productos:', error);
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
//CARRO DE COMPRAS
  const addItemToCart = (item, quantity) =>{
    if (!isInCart(item.id)){
      setCart(prev => [...prev, {...item, quantity:quantity}]);
    }else{
      console.error('El producto ya esta agregado');
    }
  };

const removeItemFromCart = (itemId) => {
  const cartUpdated = cart.filter(product => product.id !== itemId);
  setCart(cartUpdated);
};

const cleanCart = () => setCart([]);

const isInCart = (itemId) => {
  return cart.some(product => product.id === itemId);
};

  return (
    <StoreContext.Provider value={{ products, getProductById, getProductsByCategory, cart, addItemToCart, removeItemFromCart, cleanCart }}>
      {children}
    </StoreContext.Provider>
  );
};
