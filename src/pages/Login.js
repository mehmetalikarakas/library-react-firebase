import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import useLogin from "../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { error, login } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(email, password);
    login(email, password);
  };
  return (
    <div className="App">
      <h2>Giriş Yap</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Email Adresiniz:</span>
          <InputText
            id="inputtext"
            required
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          <span>Parolanız:</span>
          <InputText
            id="inputtext"
            required
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <Button label="Giriş" className="p-button-rounded p-button-info" />
      </form>
    </div>
  );
};

export default Login;
