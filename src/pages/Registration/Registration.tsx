import { useState, ChangeEvent, FormEvent } from "react";
import "../Login/Login.css";

interface User {
  username: string;
  password: string;
}

function Registration() {
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
    console.log("User submitted:", user.username, user.password);
    setUser((user) => ({ username: "", password: "" }));
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h1 className="login-h1">Registriraj se</h1>
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

export default Registration;
