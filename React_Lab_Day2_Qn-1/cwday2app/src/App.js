function PersonalInfo(){
  const name = "Alex";
  const age = 20;
  const isStudent = true;
  return(
    <div className="container text-center bg-light m-auto p-5 mx-auto w-50 border border-dark mt-5">
      <p>Name : {name}</p>
      <p>Age : {age}</p>
      <p>Are you a student : {isStudent.toString()}</p>
    </div>
  )
}
export default PersonalInfo;