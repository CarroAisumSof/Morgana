import './App.css';
import { BrowserRouter, Routes, Route, Link, Router } from "react-router-dom";
import {Contact, ItemListContainer, ItemDetailContainer, Home} from './pages';
import {NavBar,} from "./components";
import { products } from './data/products'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <NavBar/>
      </div>
      <Routes> 
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/category/:id" element={<ItemListContainer/>}/>
        <Route path="/item/:productId" element={<ItemDetailContainer/>}/>

      </Routes>  
    </BrowserRouter> 
  );
}


export default App;
