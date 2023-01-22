import './App.css';
import {ItemListContainer} from './components/ItemListContainer';
import NavBar from "./components/NavBar"
import logo from "./assets/morgana-logo.png"

function App() {
  return (
    <div className="App">
        <NavBar/>
        <ItemListContainer>
          <div className='row align-items-center'>
            <div className='col-4'>
              <img src={logo}/>
            </div>
            <div className='col-8 greeting'>
              <h1>Welcome, traveller.</h1>
              <h1>My name is Morgana, the shopkeeper. </h1>
              <h1>Here you'll find all kinds of artifacts and creatures to aid you in your quest.</h1>
            </div>
          </div>
        </ItemListContainer>
    </div>

  );
}
export default App;
