// function App() {
//   return (
//     <div>
//       <h1>Hello World</h1>
//     </div>
//   );
// }
// export default App;

// function App() {
//   let greeting = "Hello World";
//   return (
//     <div>
//     <h1>{greeting}</h1>
//     </div>
//   );
// }
// export default App;

// function App() {
//   let greeting = "World";
//   return (
//     <div>
//     <h1>Hello {greeting}</h1>
//     </div>
//   );
// }
// export default App;

// function App() {
//   return (
//     <div>
//     <h1 style={{color:"red"}}>Hello World</h1>
//     </div>
//   );
// }
// export default App;

import "./App.css";
function App() {
  let greeting = "Hello World";
  return (
    <div>
    <h1 className="greetingStyle">{greeting}</h1>
    </div>
  );
}
export default App;