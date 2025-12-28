import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");
  var [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  function attemptLogin() {
    axios
      .post("https://demo-blog.mashupstack.com/api/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        setErrorMessage("");
        localStorage.setItem("loggedUser", email);
        localStorage.setItem("token", response.data.token);
        navigate("/home");
      })
      .catch((error) => {
        if (error.response?.data?.errors) {
          setErrorMessage(Object.values(error.response.data.errors).join(" "));
        } else if (error.response?.data?.message) {
          setErrorMessage(error.response.data.message);
        } else {
          setErrorMessage("Failed to login user. Please contact admin");
        }
      });
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-8 offset-2">
          <h2>Login</h2>
          {errorMessage && (
            <div className="alert alert-danger">{errorMessage}</div>
          )}

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

          <button className="btn btn-primary float-right" onClick={attemptLogin}>
            Login
          </button>
        </div>
      </div>
      <p className="mt-3">
        Don’t have an account?{" "}
        <span
          style={{ color: "blue", cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          Signup
        </span>
      </p>
    </div>
  );
}

export default Login;
