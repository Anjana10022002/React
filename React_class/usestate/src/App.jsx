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


// import React, { useState } from 'react';

// function App() {
//   const [name, setName] = useState('');

//   function handleNameChange(event) {
//     setName(event.target.value);
//   }

//   return (
//     <div>
//       <label>Name:</label>
//       <input type="text" value={name} onChange={handleNameChange} />
//       <p>Hello, {name}!</p>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [name, setName] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`Hello, ${name}!`);
//   };

//   return (
//     <div className="App">
//       <h1>Simple React Form</h1>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="name">Name:</label>
//         <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required/>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;


// import React from 'react';
// import Header from './Header';
// import MainContent from './MainContent';
// import Footer from './Footer';

// function App() {
//   return (
//     <div>
//       <Header />
//       <MainContent />
//       <Footer />
//     </div>
//   );
// }

// export default App;

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