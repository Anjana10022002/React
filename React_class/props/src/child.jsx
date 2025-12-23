// import React from 'react';

// function Child(props) {
//        return ( 
//           <div>
//             <p> Name : {props.name} </p>
//             <p>Age : {props.age} </p>
//           </div>
//       );
// }
// export default Child;



// import React from 'react';

// function Child(props) {
//        return ( 
//             <div>
//                 <p> Name : {props.name} </p>
//                 <p>Age : {props.age} </p>
//                 <p>{props.children}</p>
//            </div>
//        );
// }
// export default Child;

// import React from 'react';

// function Child(props){
//     return( 
//         <button onClick={props.increment}> Increment count </button>
//     )
// }
// export default Child;

// import React from 'react';

// function Child(props) {
//     function handleClick() {
//            props.increment()
//     }
//      return (
//          <button onClick = {handleClick} >Increment Count </button>
//       );
// }

// export default Child;

import React, { useState } from 'react';

function Child(props) {
  const [data, setData] = useState(null);
  const handleClick = () => {
       const newData = " mashup stack";
        setData(newData);
        props.onDataFromChild(newData);
  }
   return (
       <div>
           <button onClick={handleClick}> click me </button>
           <p> Data in child component : {data}</p>
     </div>
  );
}

export default Child;