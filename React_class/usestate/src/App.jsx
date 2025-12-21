// import React, { useState } from 'react';

// function App() {
//   const [count, setCount] = useState(0);

//   const handleClick = () => {
//     setCount(count + 1);
//   }

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={handleClick}>Increment</button>
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');

  function handleNameChange(event) {
    setName(event.target.value);
  }

  return (
    <div>
      <label>Name:</label>
      <input type="text" value={name} onChange={handleNameChange} />
      <p>Hello, {name}!</p>
    </div>
  );
}

export default App;