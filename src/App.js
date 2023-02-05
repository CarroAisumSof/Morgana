import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {Contact, ItemListContainer, ItemDetailContainer, Home} from './pages';
import {NavBar,} from "./components";
import { products } from './data/products';
import logo from "./assets/morgana-logo.png"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <NavBar/>
          <Home/>
      </div>
    </BrowserRouter>
    
  );
}


export default App;
