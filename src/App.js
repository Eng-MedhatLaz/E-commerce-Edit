// import logo from './logo.svg';
import './App.css';
import { Outlet, Route, Routes } from 'react-router-dom';
import Navbar from "./compoenent/navbar";
import ProductsList from "./compoenent/productsList";
import Slider from './compoenent/slider';
import About from './compoenent/About';
import ProductDetails from './compoenent/ProductDetails';
import Addproduct from './pages/Addproduct';
 import ProductView from './pages/ProductView';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Slider />
            <ProductsList />
          </>
        } />
        {/* <Route path="about" element={<About />} > */}
        <Route path="about" element={<>
        <Outlet/>
        </>} >
          <Route path='' element={<About />}/>
        <Route path="product/:productId" element={<ProductDetails />} />
        <Route path="add" element={<Addproduct />} />
        <Route path=":ProductId" element={<ProductView />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
