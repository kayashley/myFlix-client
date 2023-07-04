import { useState } from "react";

export const LoginView = ({ onLoggedIn }) => {
    const [username, setUsername] = useState(""); 
    const [password, setPassword] = useState(""); 

    const handleSubmit = (event) => {
        event.preventDefault(); // prevents the default behavior of reloading the entire page

        const data = {
            access: username, 
            secret: password
        };

        // fetches api
        fetch("https://myflix-kc.herokuapp.com/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then((response) => response.jason())
        .then((data) => {
            console.log("Login response: ", data);
            if (data.user) {
                localStorage.setItem("user", JSON.stringify(data.user)); // stores user data
                localStorage.setItem("token", data.token); // stores token
                onLoggedIn(data.user, data.token);
            } else {
                alert("No such user.")
            }
        })
        .catch((e) => {
            alert("Something went wrong.")
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </label>
            <label>
                Password:
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};