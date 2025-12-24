import { useState, useEffect } from 'react';

function App(){
  const [count, setCount] = useState(0);
  useEffect( () =>{
    console.log("component has rendered");
  }, [ ]);
  
  const handleClick = () => {
    setCount(count + 1);
  };

    return (
  <div>
  <p>Count : {count}</p>
  <button onClick={handleClick} > Increment count </button>
  </div>
);
}
export default App;