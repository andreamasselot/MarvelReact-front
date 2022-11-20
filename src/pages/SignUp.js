import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    const value = event.target.value;
    setUsername(value);
  };
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
      "https://site--marvel--fhdp7f7ffy5p.code.run/signup",

      {
        email: email,
        username: username,
        password: password,
      }
    );
    console.log(response);
    navigate("/");
  };
  return (
    <>
      <div className="signup">
        <h1>Sign Up</h1>
        <section>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleUsernameChange}
              value={username}
            />
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

export default SignUp;
