import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="content">
        <h1>Create Account</h1>
        <Social />
        <p className="reg-text">or use your email for registration:</p>
        <Input type="text" name="name" placeholder="Name" />
        <Input type="email" name="email" placeholder="Email" />
        <Input type="text" name="password" placeholder="Password" />
        <label>
          <Checkbox type="checkbox" name="checkbox" />
          <span className="check-text">
            {" "}
            I agree to <span className="red-text">Terms</span> and{" "}
            <span className="red-text">Private Policy</span>
          </span>
        </label>

        <div className="buttons">
          <Button name="Sign Up" />
          <Button name="Sign In" isLight />
        </div>
      </div>
      <div className="img">
        <img src="https://www.goscience.eu/common/img/login.jpg" alt="Login" />
      </div>
    </div>
  );
}

function Social() {
  return (
    <div className="Social">
      <FaGoogle className="icon" />
      <FaFacebookF className="icon" />
      <FaTwitter className="icon" />
      <FaLinkedinIn className="icon" />
    </div>
  );
}

function Input(props) {
  return (
    <div className="form">
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
      />
    </div>
  );
}

const Button = (props) => (
  <button
    className={`button ${props.isLight ? "light" : "solid"}`}
    value="submit"
    type="submit"
  >
    {props.name}
  </button>
);
const Checkbox = (props) => <input type={props.type} name={props.name} />;
