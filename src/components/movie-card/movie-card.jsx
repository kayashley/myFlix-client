import PropTypes from "prop-types"; // copy "prop-types": "^15.8.1" into package dependencies
import { Card, Button } from "react-bootstrap";
// card component implemented
export const MovieCard = ({ movie, onMovieClick }) => {
  return (
    <Card className="h-100">
      <Card.Img variant="top" src={movie.imageURL} />
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text>{movie.Description}</Card.Text>
      </Card.Body>

      <Button
        onClick={() => {
          onMovieClick(movie);
        }}
      >
        Open
      </Button>
    </Card>
  );
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
