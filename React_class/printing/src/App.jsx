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

import "./App.css";
import image from "./assets/download.jpeg";
function App() {
  let greetings = ["Good Morning", "Good Afternoon","Good Evening", "Good Night", "Good Day"];
 
  return (
       <div>
           <img src={image}/>
           {greetings.map((item)=>{return <p>{item}</p>})}  
      </div>
  );
}
export default App;