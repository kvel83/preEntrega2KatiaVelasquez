import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { StoreProvider } from './contexts/StoreContext';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import './App.css';


function App() {
  const [productSearched, setProductSearched] = useState('');
  console.log(productSearched);

  return (
    <>
      <BrowserRouter basename='/preEntrega2KatiaVelasquez'>
        <StoreProvider>
          <NavBar setProductSearched= {setProductSearched}/>
            <Routes>
              <Route path='/' element={<ItemListContainer props = {'Bienvenido a Kawaii Store'} productSearched={productSearched}/>}/>
              <Route path='/category/:categoryId' element={<ItemListContainer />}/>
              <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
              <Route path='/cart' element={<Cart />}/>
              <Route path='/checkout' element={<Checkout />}/>
              <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
            </Routes>
        </StoreProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
