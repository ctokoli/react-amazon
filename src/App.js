import logo from './logo.svg';
import './App.css';
import ProductCard from './components/templates/cards';
import data from './data';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <left>
            <div>
              <a className='brand' href="/">Amazona</a>
            </div>
          </left>
          <right>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
          </right>
        
        </header>
        <main >
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
          <div className='row center'>
          {data.products.map(product => (
            <ProductCard
              id = {product._id}
              image ={product.image}
              name={product.name}
              price={product.price}
              rating = {product.rating}
              numReviews = {product.reviews}
            />
          ))}
          </div>
        
        
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
