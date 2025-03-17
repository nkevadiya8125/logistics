import './App.css';
import {Route, Routes} from 'react-router-dom';
import {SingleProduct} from './Components/SingleProduct';
import Home from "./pages/Home";
import ProductCategories from "./Components/ProductCategories";
import Navbar from "./Components/Navbar";

function App() {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/product-categories' element={<ProductCategories/>}/>
                <Route path='/product/:id' element={<SingleProduct/>}/>
            </Routes>
        </>
    );
}

export default App;
