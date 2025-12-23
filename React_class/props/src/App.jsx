// import React from 'react';
// import Child from './child';

// function App() {
//     const name = "Alice";
//     const age = 25;
//     return ( 
//        <Child name={name} age={age} /> 
//      );
// }

// export default App;

// import React from 'react';
// import Child from './child';

// function App() {
//   const name = "Alice";
//   const age = 25;
//   return ( 
//     <Child name={name} age={age} >
//        <p> Welcome to mashup stack </p>
//    </Child>
//    );
// }

// export default App;

// import React, {useState} from 'react';
// import Child from './child';

// function App() {
//    const [count, setCount] = useState(0);
//    function incrementCount(){
//   setCount(count + 1);
//     }
//    return (
//        <div>
//             <h1>Count: { count } </h1>
//             <Child increment={incrementCount} />
//       </div>
//   );
// }
  
// export default App;


// import React , { useState } from 'react';
// import Child from './child';

// function App() {
//     const [count, setCount ] = useState(0);
//    function incrementCount () {
//     setCount(count+1);
//     }

//     return(
//        <div>
//            <p>Count: { count } </p>
//            <Child increment= { incrementCount } />
//       </div>
//     );
// }

// export default App;


import React, { useState } from 'react';
import Child from './child';

function App() {
  const [ dataFromChild, setDataFromChild] = useState(null);
  
  const handleDataFromChild = (data) => {
    setDataFromChild(data);
}

  return(
      <div>
            <Child onDataFromChild = {handleDataFromChild} />
            <p> Data from child component : {dataFromChild} </p>
    </div>
    );
}

export default App;