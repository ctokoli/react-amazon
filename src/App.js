import logo from './logo.svg';
import './App.css';
import ProductCard from './components/templates/cards';
import data from './data';

function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <left>
          <div>
            <a className='brand' href="index.html">Amazona</a>
          </div>
        </left>
        <right>
        <a href="cart.html">Cart</a>
        <a href="signin.html">Sign In</a>
        </right>
       
      </header>
      <main className='row center'>
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
      
       
      </main>
      <footer>
        <div className='row center'>
          All Rights Reserved
        </div>
      </footer>
    </div>
  );
}

export default App;
