import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };
  return (
    <div className="App">
      <h2>Üye Ol</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Email Adresiniz:</span>
          <InputText
            required
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          <span>Parola:</span>
          <InputText
            required
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <Button label="Üye Ol" className="p-button-rounded p-button-info" />
      </form>
    </div>
  );
};

export default Signup;
