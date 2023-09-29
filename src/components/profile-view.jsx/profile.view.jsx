import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { Button, Form, Row, Col } from "react-bootstrap";

export function ProfileView() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [email, setEmail] = useState(null);
  const [birthday, setBirthday] = useState(null);

  // regular array of movie objects
  let favoriteMovies = movies.filter((m) =>
    user.FavoriteMovies.includes(m._id_)
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      Username: username,
      Password: password,
      email: email,
      Birthday: birthday,
    };
  };

  fetch("https://web-production-0aea6.up.railway.app/users/${user.username}", {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.jason();
      } else {
        alert("Update failed.");
      }
    })
    .then((data) => {
      if (data) {
        localStorage.setItem("user", JSON.stringify(data));
        setUsername(data);
      }
    });

  const handleDeleteUser = () => {
    fetch("https://web-production-0aea6.up.railway.app/users/${user.username}"),
      {
        method: "DELETE",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }.then((response) => {
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
      <Row className="justify-content-center">
        <Col md={5}>
          <h1 className="profile">My Profile</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formUsername" className="form-group">
              <Form.Label>Username:</Form.Label>
              <Form.Control
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formPassword" className="form-group">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formEmail" className="form-group">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formBirthday" className="form-group">
              <Form.Label>Birthday:</Form.Label>
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
      <Row className="justify-content-center">
        <h2>Favorite Movies</h2>
        {favoriteMovies.map((movie) => (
          <Col>
            <MovieCard
              movie={movie}
              user={user}
              token={token}
              setUser={(user) => updatedUsername(user)}
            />
          </Col>
        ))}
      </Row>

      <Button variant="primary" onClick={handleDeleteUser}>
        Remove
      </Button>
    </>
  );
}

//   return (
//     <div>
//       <p>User: {user.Username}</p>
//       <p>Email: {user.Email}</p>
//       <div>
//         <h2>Favorite Movies</h2>
//         {favoriteMovieList.map((movies) => {
//           return (
//             <div key={movies._id}>
//               <img src={movies.ImagePath} />
//               <Link to={`/movies/${movies._id}`}>
//                 <h4>{movies.Title}</h4>
//               </Link>
//               <button variant="secondary" onClick={() => removeFav(movies._id)}>
//                 Remove from list
//               </button>
//             </div>
//           );
//         })}
//       </div>

//       <form className="profile-view" onSubmit={(e) => handleSubmit(e)}>
//         <h2>Want to change some info?</h2>
//         <label>Username:</label>
//         <input
//           type="text"
//           name="username"
//           defaultValue={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <label>Password:</label>
//         <input
//           type="password"
//           name="password"
//           defaultValue={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <label>Email Address</label>
//         <input
//           type="email"
//           name="email"
//           defaultValue={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <label>Birthday</label>
//         <input
//           type="birthday"
//           name="birthday"
//           defaultValue={birthday}
//           onChange={(e) => setBirthday(e.target.value)}
//         />
//         <button variant="primary" type="submit">
//           Update
//         </button>
//       </form>
//     </div>
//   );
