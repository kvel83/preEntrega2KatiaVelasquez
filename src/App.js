import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { ProductProvider } from './contexts/ProductContext';

function App() {
  return (
    <>
      <BrowserRouter basename='/preEntrega2KatiaVelasquez'>
        <ProductProvider>
          <NavBar />
            <Routes>
              <Route path='/' element={<ItemListContainer props = {'Bienvenido a Kawaii Store'}/>}/>
              <Route path='/category/:categoryId' element={<ItemListContainer />}/>
              <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
              <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
            </Routes>
        </ProductProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
