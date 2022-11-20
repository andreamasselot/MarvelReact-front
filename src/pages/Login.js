import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };
  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post(
      "https://site--marvel--fhdp7f7ffy5p.code.run/login",

      {
        email: email,
        password: password,
      }
    );
    console.log(response);
    navigate("/");
  };
  return (
    <>
      <div className="signup">
        <h1>Login</h1>
        <section>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleEmailChange}
              value={email}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={handlePasswordChange}
            />
            <button type="submit">Submit</button>
          </form>
        </section>
      </div>
    </>
  );
};

export default Login;
