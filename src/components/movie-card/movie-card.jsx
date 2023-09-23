import PropTypes from "prop-types"; // copy "prop-types": "^15.8.1" into package dependencies
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

// card component implemented
export const MovieCard = ({ movie, onMovieClick }) => {
  return (
    <Card className="h-100">
      <Card.Img variant="top" src={movie.imageURL} />
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text>{movie.Description}</Card.Text>
        <Link to={`/movies/${encodedURIComponent(movie.id)}`}>
          <Button variant="link">Open</Button>
        </Link>
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
