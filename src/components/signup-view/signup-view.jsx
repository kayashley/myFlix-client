import { useState } from "react";

export const SignupView = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [birthday, setBirthday] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault(); // prevents the default behavior of reloading the entire page
        const data = {
            Username: username,
            Password: password,
            Email: email,
            Birthday: birthday
        };

        // fetches api
        fetch("https://myflix-kc.herokuapp.com/signup", {
            method: "POST",
            body: JSON.stringify(data), // translates the response to JSON 
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response) => {
            if (response.ok) {
                alert("Signup successful!");
                window.location.reload();
            } else {
                alert("Signup failed.")
            }
        });
    };

    // form inputs
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                minLength={3}
                />
            </label>
            <label>
                Password:
                <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
            </label>
            <label>
                Email:
                <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
            </label>
            <label>
                Birthday:
                <input
                type="birthday"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
                required
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};