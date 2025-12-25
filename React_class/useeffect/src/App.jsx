// import { useState, useEffect } from 'react';

// function App(){
//   const [count, setCount] = useState(0);
//   useEffect( () =>{
//     console.log("component has rendered");
//   }, [ ]);
  
//   const handleClick = () => {
//     setCount(count + 1);
//   };

//     return (
//   <div>
//   <p>Count : {count}</p>
//   <button onClick={handleClick} > Increment count </button>
//   </div>
// );
// }
// export default App;


// import { useState, useEffect } from 'react';

// function App(){
//   const [count, setCount] = useState(0);
//   useEffect( () =>{
//     console.log("component has rendered");
//   });
  
//   const handleClick = () => {
//     setCount(count + 1);
//   };

//     return (
//   <div>
//   <p>Count : {count}</p>
//   <button onClick={handleClick} > Increment count </button>
//   </div>
// );
// }
// export default App;


import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count changed to ${count}`);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
}
export default App;