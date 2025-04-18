import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';
import Layout from './Layout/Layout';
import Home from './Pages/Home';
import Products from './Pages/Products';
import SinglePage from './Pages/SinglePage';
import Cart from './Pages/Cart';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='products' element={<Products />} />
        <Route path='cart' element={<Cart />} />
        <Route path='products/:id' element={<SinglePage />} />
      </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;