import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

class LoadingBox extends React.Component {
    render() { 
        return <div>
           <FontAwesomeIcon icon={faSpinner} ></FontAwesomeIcon> Loading.....
        </div>;
    }
}
 
export default LoadingBox;