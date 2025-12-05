function foodList(){
  let food = ['Pizza', 'Burger', 'Pasta', 'Salad', 'Sushi'];
  return (
    <ul>
      {food.map((item, index) => <li key={index}>{item}  
        <button onClick={()=>{document.write(`I Love ${item}`)}}>Click</button>
      </li>  )}
    </ul>
  )
}
export default foodList;