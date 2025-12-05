function foodList(){
  let food = ['Pizza', 'Burger', 'Pasta', 'Salad', 'Sushi'];
  return (
    <ul>
      {food.map((item, index) => <li key={index}>{item}</li>  )}
    </ul>
  )

}
export default foodList;