import { useState, ChangeEvent, FormEvent } from "react";
import axios, { AxiosResponse } from "axios";
import "./Login.css";

interface User {
  username: string;
  password: string;
}

function Login() {
  const [user, setUser] = useState<User>({
    username: "",
    password: "",
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(`User ${user.username} submitted!`);
    setUser((user) => ({ username: "", password: "" }));
    axios
      .post("http://localhost:8000/user/login", user)
      .then((response: AxiosResponse) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h1 className="login-h1">Prijavi se</h1>
        <div className="form-group">
          <label htmlFor="username">Ime</label>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Šifra</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="sub">
          Pošalji
        </button>
      </form>
    </div>
  );
}

export default Login;
