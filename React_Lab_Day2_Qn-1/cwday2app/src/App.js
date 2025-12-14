function PersonalInfo(){
  const name = "Alex";
  const age = 20;
  const isStudent = true;
  const hobbies = ["Reading", "Hiking", "Coding"];
  const hobbieList = [ ];
  for( let i= 0; i < hobbies.length; i++){
    hobbieList.push(<li>{hobbies[i]}</li>)
  }
  return(
    <>
    <div className="container text-center bg-light m-auto p-5 mx-auto w-50 border border-dark mt-5">
      <p>Name : {name}</p>
      <p>Age : {age}</p>
      <p>Are you a student : {isStudent.toString()}</p>
    </div>
    <div>
      <p>Displaying hobby list using for loop</p>
      <ul>{hobbieList}</ul>

      <p>Displaying hobby list using map function</p>
      {hobbies.map((item)=>{return <ul><li>{item}</li></ul>})}
    </div>
    </>
    
  )
}
export default PersonalInfo;