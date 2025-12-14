function PersonalInfo(){
  const name = "Alex";
  const age = 20;
  const isStudent = true;
  const hobbies = ["Reading", "Hiking", "Coding"];
  const hobbieList = [ ];
  for( let i= 0; i < hobbies.length; i++){
    hobbieList.push(<li>{hobbies[i]}</li>)
  }
  const hobby = "Hello from React! I love my hobbies! ";
  const headingColor = "darkblue";
  function button(){
    document.getElementById("hobbyHeading").innerHTML = hobby;
    document.getElementById("hobbyHeading").style.color = headingColor;


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
    <div>
      <button className="btn btn-primary" onClick={button}>Show Enthusiasm</button>
      <p id="hobbyHeading"></p>
    </div>

    </>

    
  )
}
export default PersonalInfo;