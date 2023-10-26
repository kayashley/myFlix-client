import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./login-view.scss";

export const LoginView = ({ onLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    // Prevents the default behavior or the form which is to reload the entire page
    event.preventDefault();

    // const data = { access: username, secret: password };
    const loginData = { Username: username, Password: password };

    fetch("https://web-production-0aea6.up.railway.app/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData),
    })
      // transforms the response content into a JSON object that your code can use to extract the JWT sent by the myFLix API
      .then((response) => response.json())
      .then((loginData) => {
        console.log("Login response: ", loginData);
        // localStorage, allows data storage - temp in memory while the app is running & cleared once the tab is closed or reloaded
        // storing user and token in localStorage
        if (loginData.user) {
          localStorage.setItem("user", JSON.stringify(loginData.user));
          localStorage.setItem("token", loginData.token);
          onLoggedIn(loginData.user, loginData.token);
        } else {
          alert("User doesn't exist");
        }
      })
      .catch((e) => {
        console.log("error", e);
        alert("Something went wrong");
      });
  };

  return (
    <Form onSubmit={handleSubmit} className="form">
      <Form.Group controlId="formUsername">
        <Form.Label>Username </Form.Label>
        <Form.Control
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group controlId="formPassword">
        <Form.Label>Password </Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit" className="submit">
        Submit
      </Button>
    </Form>
  );
};
