import React from 'react';
import Child from './child';

function App() {
    const name = "Alice";
    const age = 25;
    return ( 
       <Child name={name} age={age} /> 
     );
}

export default App;