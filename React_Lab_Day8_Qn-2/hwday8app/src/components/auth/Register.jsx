import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  function registerUser() {
    if (password !== passwordConf) {
      setErrorMessage("Passwords do not match");
      return;
    }

    axios
      .post("https://worksheet-auth.mashupstack.com/register", {
        user_name: name,
        email: email,
        password: password,
      })
      .then(() => {
        alert("Registration Successful");
        navigate("/login");
      })
      .catch((error) => {
        if (error.response && error.response.data) {
          setErrorMessage("Registration failed");
        } else {
          setErrorMessage("Failed to connect to API");
        }
      });
  }

  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <div className="row">
          <div className="col-8 offset-2">
            <h1>Register</h1>

            {errorMessage && (
              <div className="alert alert-danger">{errorMessage}</div>
            )}

            <div className="form-group">
              <label>Name</label>
              <input
                className="form-control"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                className="form-control"
                onChange={(e) => setPasswordConf(e.target.value)}
              />
            </div>

            <button className="btn btn-primary mt-3" onClick={registerUser}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
