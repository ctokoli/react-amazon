
import React from 'react';

class MessageBox extends React.Component {
    render() { 
        return <div className={`alert alert-${this.props.variant || 'info'}`} >
          {this.props.children} 
        </div>;
    }
}
 
export default MessageBox;