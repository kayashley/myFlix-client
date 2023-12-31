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
        <Card.Img variant="" className="" src={movie.imagepath} />
        <Card.Body className="title">
          <h5 className="a">{movie.title}</h5>
        </Card.Body>
      </Link>
    </Card>
  );
};

// prop-types conditions for return MovieCard statements in main-view
MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imagepath: PropTypes.string.isRequired,
    director: PropTypes.object.isRequired,
    description: PropTypes.string.isRequired,
    year: PropTypes.string,
  }).isRequired,
  user: PropTypes.object.isRequired,
};
