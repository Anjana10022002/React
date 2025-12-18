import axios from "axios";
import { useState } from "react";
import Navbar from "./Navbar";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function attemptLogin() {
    axios
      .post("https://worksheet-auth.mashupstack.com/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        alert("Successfully Logged In");        // ✅ ALERT
        console.log("Token:", response.data.token); // ✅ PRINT TOKEN
        setErrorMessage("");
      })
      .catch((error) => {
        if (error.response && error.response.data.message) {
          setErrorMessage(error.response.data.message);
        } else {
          setErrorMessage("Login failed");
        }
      });
  }

  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <div className="row">
          <div className="col-6 offset-3">
            <h1>Login</h1>

            {errorMessage && (
              <div className="alert alert-danger">{errorMessage}</div>
            )}

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

            <button className="btn btn-primary mt-3" onClick={attemptLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
