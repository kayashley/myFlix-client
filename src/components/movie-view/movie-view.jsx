import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./movie-view.scss";

export const MovieView = ({ movies, user, token, setUser }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { movieId } = useParams();
  const movie = movies.find((m) => m._id === movieId);

  // useEffect() to log the value of isFavorite
  useEffect(() => {
    if (user.FavoriteMovies && user.FavoriteMovies.includes(movie._id)) {
      setIsFavorite(true);
    }
  }, [user]);

  // function to add movies to favorites list
  const addFavoriteMovie = () => {
    console.log("called addFavoriteMovie");
    fetch(
      `https://web-production-0aea6.up.railway.app/users/${user.Username}/movies/${movie._id}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          alert("Failed to add to favorites list");
        }
      })
      .then((user) => {
        if (user) {
          localStorage.setItem("user", JSON.stringify(user));
          setUser(user);
          setIsFavorite(true);
        }
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  };

  // function to remove movie from favorites list
  const removeFavoriteMovie = () => {
    fetch(
      `https://web-production-0aea6.up.railway.app/users/${user.Username}/movies/${movie._id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          alert("Failed");
          return false;
        }
      })
      .then((user) => {
        if (user) {
          localStorage.setItem("user", JSON.stringify(user)); // updates user on local storage
          setUser(user); // updates react app
          setIsFavorite(false); // sets back to false
        }
      })
      .catch((err) => {
        alert("Error", err);
      });
  };

  if (!movie) {
    return <p>Movie not found</p>;
  }

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Img className="card-image" src={movie.imagepath} />
            </Card>
          </Col>
          <Col>
            <Card className="w-100">
              <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>{movie.description}</Card.Text>
                <Card.Title>Director</Card.Title>
                <Card.Text>
                  {movie.director.name}, {movie.director.birth}
                </Card.Text>
                <Card.Title>Genre</Card.Title>
                <Card.Text>{movie.genre.name}</Card.Text>

                {/* favorites list buttons */}
                {!isFavorite ? (
                  <Button
                    variant="primary"
                    onClick={addFavoriteMovie}
                    className="fav-btn"
                  >
                    ❤️ Add to favorites list
                  </Button>
                ) : (
                  <Button
                    variant="primary"
                    onClick={removeFavoriteMovie}
                    className="fav-btn"
                  >
                    💔 Remove from favorites list
                  </Button>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Link to="/">
          <Button variant="primary" className="back-btn">
            Back
          </Button>
        </Link>
      </Container>
    </>
  );
};
