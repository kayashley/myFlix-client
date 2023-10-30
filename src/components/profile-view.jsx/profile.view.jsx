import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { Button, Form, Row, Col } from "react-bootstrap";
import "./profile-view.scss";

export function ProfileView({ movies, user, token, setUser }) {
  const [username, setUsername] = useState(user.Username);
  const [password, setPassword] = useState(user.Password);
  const [email, setEmail] = useState(user.Email);
  const [birthday, setBirthday] = useState(user.Birthday);

  // regular array of movie objects
  let favoriteMovies = movies.filter((m) => {
    return user.FavoriteMovies.includes(m._id);
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      Username: username,
      Email: email,
      Birthday: birthday,
    };

    if (password) {
      data["Password"] = password;
    }

    fetch(
      `https://web-production-0aea6.up.railway.app/users/${user.Username}`,
      {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          alert("Successfully saved changes!");
          return response.json();
        } else {
          alert("Update failed");
        }
      })
      .then((data) => {
        if (data) {
          localStorage.setItem("user", JSON.stringify(data));
          setUser(data);
        }
      });
  };

  const handleDeleteUser = () => {
    fetch(
      `https://web-production-0aea6.up.railway.app/users/${user.Username}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    ).then((response) => {
      if (response.ok) {
        setUser(null);
        alert("Your account has been deleted");
      } else {
        alert("Something went wrong");
      }
    });
  };

  return (
    <>
      {/* form for user profile */}
      <Row className="profile">
        <Col md={5}>
          <h4>My Profile</h4>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formUsername" className="form-group">
              <Form.Label>Username </Form.Label>
              <Form.Control
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formPassword" className="form-group">
              <Form.Label>Password </Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formEmail" className="form-group">
              <Form.Label>Email </Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formBirthday">
              <Form.Label>Birthday </Form.Label>
              <Form.Control
                type="date"
                value={birthday.slice(0, 10)}
                onChange={(e) => setBirthday(e.target.value)}
                required
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>

      {/* save changes for user profile */}
      <Row>
        <Col className="btn">
          <Button
            variant="primary"
            type="submit"
            onClick={handleSubmit}
            className="save-btn"
          >
            Save Changes
          </Button>

          <Button
            variant="warning"
            onClick={handleDeleteUser}
            className="delete-btn"
          >
            Delete Account
          </Button>
        </Col>
      </Row>

      {/* users favorite list */}
      <Row className="fav">
        <h4>Favorite Movies</h4>
        {favoriteMovies.map((movie) => (
          <Col className="mb-4" key={movie._id} xs={6} md={3}>
            <MovieCard
              movie={movie}
              user={user}
              token={token}
              setUser={setUser}
            />
          </Col>
        ))}
      </Row>
    </>
  );
}
