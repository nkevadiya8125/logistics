import logo from './logo.svg';
import './App.css';
import LetsConnect from './Components/LetsConnect';
//import Header from './Components/Header';
//import Logo from './Components/Logo';
import Product from './Components/Product';
import ProductCategories from './Components/ProductCategories';
import { Route, Routes } from 'react-router-dom';
import { SingleProduct } from './Components/SingleProduct';




function App() {
  return (
    
  // eslint-disable-next-line react/jsx-no-comment-textnodes
  <div>
{/* //<LetsConnect/> */}
   {/* // <Logo/> */}
   {/* <Product/> */}
{/* <ProductCategories/> */}

<Routes>
  <Route path='/' element={<ProductCategories/>}/>
  <Route path='/singleproduct' element={<SingleProduct/>}/>


 
</Routes>
  </div>


    
  
  );
}

export default App;
