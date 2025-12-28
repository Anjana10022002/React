import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  var [name, setName] = useState("");
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");
  var [passwordConfirm, setPasswordConfirm] = useState("");
  var [errorMessage, setErrorMessage] = useState("");
  var navigate = useNavigate();

  function signupUser() {
    var user = {
      name: name,
      email: email,
      password: password,
      password_confirmation: passwordConfirm,
    };

    axios
      .post("https://demo-blog.mashupstack.com/api/register", user)
      .then((response) => {
        setErrorMessage("");
        navigate("/login");
      })
      .catch((error) => {
        if (error.response?.data?.errors) {
          setErrorMessage(Object.values(error.response.data.errors).join(" "));
        } else {
          setErrorMessage("Failed to connect to api");
        }
      });
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-8 offset-2">
          <h1>Register</h1>

          {errorMessage && (
            <div className="alert alert-danger">{errorMessage}</div>
          )}

          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onInput={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input
              type="text"
              className="form-control"
              value={email}
              onInput={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onInput={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Confirm Password:</label>
            <input
              type="password"
              className="form-control"
              value={passwordConfirm}
              onInput={(e) => setPasswordConfirm(e.target.value)}
            />
          </div>

          <button className="btn btn-primary float-right" onClick={signupUser}>
            Submit
          </button>
        </div>
      </div>
      <p className="mt-3">
        Already have an account?{" "}
        <span
          style={{ color: "blue", cursor: "pointer" }}
          onClick={() => navigate("/login")}
        >
          Login here
        </span>
      </p>
    </div>
    
  );
}

export default Signup;
