import React from 'react';

function Child(props) {
       return ( 
          <div>
            <p> Name : {props.name} </p>
            <p>Age : {props.age} </p>
          </div>
      );
}
export default Child;