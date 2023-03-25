import React from "react";
import { Button, TextInputField, Alert } from "evergreen-ui";
import "./Login.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const initialFormdata = {
    name: "",
    password: "",
  };

  let [formdata, setFormdata] = React.useState(initialFormdata);
  let [errorTitle, setErrorTitle] = React.useState(null);

  const handleChange = (event) => {
    let field = event.target.name;
    setFormdata({ ...formdata, [field]: event.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formdata);

    if (formdata.name === "foo" && formdata.password === "bar") {
      localStorage.setItem("isLoggedIn", "true");
      return navigate("/home");
    } else {
      setErrorTitle("Invalid Login details");
    }
  };

  return (
    <div>
      <div className="pageCenter">
        <div className="loginPage">
          <h2>Login</h2>
          {errorTitle && (
            <Alert type="danger" className="alert" title={errorTitle} />
          )}
          <form onSubmit={onSubmit}>
            <TextInputField
              label="Name"
              placeholder="Name"
              name="name"
              onChange={handleChange}
            />
            <TextInputField
              label="Password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            <Button appearance="green" className="loginBtn">
              Login
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
