import PropTypes from "prop-types"; // copy "prop-types": "^15.8.1" into package dependencies
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./movie-card.scss";

// card component implemented
export const MovieCard = ({ movie, user }) => {
  return (
    // movie card display
    <Card className="h-100 card-btn card">
      <Link to={`/movies/${encodeURIComponent(movie._id)}`}>
        <Card.Img variant="" className="" src={movie.ImagePath} />
        <Card.Body className="title">
          <h5 className="a">{movie.Title}</h5>
        </Card.Body>
      </Link>
    </Card>
  );
};

// prop-types conditions for return MovieCard statements in main-view
MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired,
    Director: PropTypes.object.isRequired,
    Description: PropTypes.string.isRequired,
    Year: PropTypes.string,
  }).isRequired,
  user: PropTypes.object.isRequired,
};
