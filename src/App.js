
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import ProductScreen from 'screens/productScreen';
import HomeScreen from 'screens/HomeScreen';

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
         <div>
            <div>
              <a className='brand' href="/">Amazona</a>
            </div>
          </div>
          <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
          </div>
        
        </header>
        <main >
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>
        <footer>
          <div className='row center'>
            All Rights Reserved
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
