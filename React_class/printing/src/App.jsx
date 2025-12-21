// import "./App.css";
// import image from "./assets/download.jpeg";

// function App() {
//   let greetings = ["Good Morning", "Good Afternoon","Good Evening", "Good Night", "Good Day"];
 
//   return (
//            <div>
//                <img src={image}/>
//                 {greetings[2]}
//            </div>
//   );
// }
// export default App;

// import "./App.css";
// import image from "./assets/download.jpeg";
// function App() {
//   let greetings = ["Good Morning", "Good Afternoon","Good Evening", "Good Night", "Good Day"];
 
//   return (
//        <div>
//            <img src={image}/>
//            {greetings.map((item)=>{return <p>{item}</p>})}  
//       </div>
//   );
// }
// export default App;


// import "./App.css";
// import image from "./assets/download.jpeg";
// function App() {
//      const fruits = ["apple", "banana", "cherry", "mango"];
//      const fruitList = [ ];
//   for( let i=0; i < fruits.length; i++) {
//        fruitList.push(<li key ={i}> {fruits[i]} </li> );
//  }
// return (
//          <div>
//             <h1>Fruit list</h1>
//             <ul>{fruitList}</ul>
//       </div>
//   );
// }
// export default App;


// import "./App.css";
// import image from "./assets/download.jpeg";
// function App() {
//   let greetings = [{name:"Vijay",location:"Kochi"},{name:"Rajesh", location:"Delhi"}];
 
//   return (
//          <div>
//               <img src={image}/>
//               {greetings[1].name}
//          </div>
//   );
// }
// export default App;

// import "./App.css";
// import image from "./assets/download.jpeg";
// function App() {
//   let students = [{name:"Vijay",location:"Kochi"},{name:"Rajesh", location:"Delhi"}];
 
//   return (
//         <div>
//             <img src={image}/>
//              {students.map((item)=>{return <p>{item.name} is from {item.location}</p>})}
//         </div>
//   );
// }
// // export default App;

// import React from 'react';

// function App(){
//   var user = 'John';
//       return (
//     <div>
//       <input type='text' value={user} />
//     </div>
// )}
// export default App;

// import React from 'react';

// function App(){
//   var user = ["John" , "William", "David"];
//       return (
//     <div>
//       <input type="text" value={user[1]} />
//     </div>
// )}
// export default App;

// import React from 'react';

// function App(){
//   var user = { name : "Arun" , age : 20 }
//       return (
//     <div>
//       <input type="text" value={user.name} />
//     </div>
// )}
// export default App;

function handleClick() {
  console.log('Button was clicked!');
}

function App() {
  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}
export default App;