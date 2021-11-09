import React from 'react';
import { faStar} from '@fortawesome/free-solid-svg-icons';
import { faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


/**
 * @param {{ rating: any; numReviews: any; }} props
 */
export default function Rating(props){
    const {rating, numReviews} = props;
    return(
        <div>
        {rating >= 2 ?  <FontAwesomeIcon icon={faStar} className="" /> : rating >= 1.5 ?  <FontAwesomeIcon icon={faStarHalfAlt} className="" /> :  <FontAwesomeIcon icon={faStarHalf} className="" /> }
        {rating >= 3 ?  <FontAwesomeIcon icon={faStar} className="" /> : rating >= 2.5 ?  <FontAwesomeIcon icon={faStarHalfAlt} className="" /> :  <FontAwesomeIcon icon={faStarHalf} className="" /> }
        {rating >= 1 ?  <FontAwesomeIcon icon={faStar} className="" /> : rating >= 0.5 ?  <FontAwesomeIcon icon={faStarHalfAlt} className="" /> :  <FontAwesomeIcon icon={faStarHalf} className="" /> }
        {rating >= 4 ?  <FontAwesomeIcon icon={faStar} className="" /> : rating >= 3.5 ?  <FontAwesomeIcon icon={faStarHalfAlt} className="" /> :  <FontAwesomeIcon icon={faStarHalf} className="" /> }
        {rating >= 5 ?  <FontAwesomeIcon icon={faStar} className="" /> : rating >= 4.5 ?  <FontAwesomeIcon icon={faStarHalfAlt} className="" /> :  <FontAwesomeIcon icon={faStarHalf} className="" /> }
        <span>
        { numReviews + " reviews"}
        </span>       
        </div>
    )
}