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

import React from 'react';

function Child(props) {
    function handleClick() {
           props.increment()
    }
     return (
         <button onClick = {handleClick} >Increment Count </button>
      );
}

export default Child;