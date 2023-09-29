import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const LoginView = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const handleSubmit = (event) => {
    // Prevents the default behavior or the form which is to reload the entire page
    event.preventDefault();

    // const data = { access: username, secret: password };
    const data = { username: username, password: password };

    fetch("https://myflix-kc-3l19.onrender.com/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      // transforms the response content into a JSON object that your code can use to extract the JWT sent by the myFLix API
      .then((response) => response.json())
      .then((data) => {
        console.log("Login response: ", data);
        if (data.user) {
          // passes the user and token back to MainView so they can e used in other requests
          onLoggedIn(data.user, data.token);
        } else {
          alert("No such user");
        }
      })
      .catch(() => {
        alert("Something went wrong");
      });
  };

  // localStorage, allows data storage - temp in memory while the app is running & cleared once the tab is closed or reloaded
  // storing user and token in localStorage
  if (data.user) {
    localStorage.setItem("user", JSON.stringify(data.user));
    localStorage.setItem("token", data.token);
    onLoggedin(data.user, data.token);
  } else {
    alert("No such user");
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formUsername">
        <Form.Label>
          Username:
          <Form.Control
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </Form.Label>
      </Form.Group>
      <Form.Group controlId="formPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
