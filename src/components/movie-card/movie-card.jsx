import PropTypes from "prop-types"; // copy "prop-types": "^15.8.1" into package dependencies
import { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

// card component implemented
export const MovieCard = ({ movie, onMovieClick }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    console.log(user);
    if (user.favoriteMovies && user.favoriteMovies.includes(movie._id)) {
      setIsFavorite(true);
    }
  }, []);

  const addFavoriteMovie = () => {
    fetch(
      "https://myflix-kc-3l19.onrender.com/users/${user.username}/movies/${movies._id}",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
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
          alert("Successfully added to favorites");
          setIsFavorite(true);
        }
      });
  };

  const removeFavoriteMovie = () => {
    fetch(
      "https://myflix-kc-3l19.onrender.com/users/${user.username}/movies/${movies._id}",
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
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
          alert("Successfully removed from favorites");
          setIsFavorite(false);
        }
      });
  };

  return (
    <Card className="h-100">
      <Card.Img variant="top" src={movie.ImagePath} />
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text>{movie.Description}</Card.Text>
        <Link to={`/movies/${encodedURIComponent(movie.id)}`}>
          <Button variant="link">Open</Button>
        </Link>
      </Card.Body>

      <Card.Body>
        <Card.Footer className="text-center">
          {!isFavorite ? (
            <Button variant="primary" onClick={addFavoriteMovie}>
              Add to favorites list
            </Button>
          ) : (
            <Button variant="primary" onClick={removeFavoriteMovie}>
              Remove from favorites list
            </Button>
          )}
        </Card.Footer>
      </Card.Body>
    </Card>

    // without React Router Link
    /* <Button
        onClick={() => {
          onMovieClick(movie);
        }}
      >
        Open
      </Button> */
  );
};

// prop-types conditions for return MovieCard statements in main-view
MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired,
    Director: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    Year: PropTypes.string,
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired,
};

// without card component implemented
// export const MovieCard = ({ movie, onMovieClick }) => {
//     return (
//         <div
//             onClick={() => {
//                 onMovieClick(movie);
//         }}
//         >
//             {movie.title}
//         </div>
//     );
// };
