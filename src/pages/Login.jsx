import { useState } from "react";
import userData from "../constants/user";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const isLoggedIn = sessionStorage.getItem("login") === "true";

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = { username, password };

    if (
      user.username === userData[0].username &&
      user.password === userData[0].password
    ) {
      sessionStorage.setItem("login", "true");
      navigate("/");
      window.location.reload();
    } else {
      alert("Username atau Password salah");
    }
  };

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div className="container my-3">
      <h1 className="text-center">Login</h1>
      <div className="d-flex justify-content-center">
        <p
          className="text-center bg-warning rounded-3 p-2 fw-semibold"
          style={{ width: "32rem" }}
        >
          Silahkan login dengan username : 'abcde' dan password : '12345'
        </p>
      </div>
      <div className="d-flex justify-content-center">
        <div
          className="border border-dark p-3 rounded-4"
          style={{ width: "22rem" }}
        >
          <form onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <label htmlFor="floatingInput">Username</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="d-flex justify-content-center mt-3">
              <button type="submit" className="btn btn-primary fw-bold">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
