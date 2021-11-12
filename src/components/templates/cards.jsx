import React from 'react';
import Rating from './star_comp';

class ProductCard extends React.Component{
    render() { 
        return <div>
         <div className='card' key={this.props.id} >
            <a href= {`/product/${this.props.id}`}>
              <img className="medium" src={process.env.PUBLIC_URL + this.props.image}  alt={this.props.name}/>
            </a> 
            <div className='card-body'>
              <a href= {`/product/${this.props.id}`} >
                <h2>
                 {this.props.name}
                </h2>
              </a>
              <div className="rating">
               <Rating
                 rating = {this.props.rating}
                 numReviews = {this.props.numReviews}
               />
              </div>
              <div className="price">
              GHS {this.props.price}
              </div>
            </div> 
         </div>
        </div>;
    }
}
 
export default ProductCard;