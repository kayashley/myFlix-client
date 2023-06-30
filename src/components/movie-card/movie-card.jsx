import PropTypes from "prop-types"; // copy "prop-types": "^15.8.1" into package dependencies 

export const MovieCard = ({ movie, onMovieClick }) => {
    return (
        <div
            onClick={() => {
                onMovieClick(movie);
        }}
        >
            {movie.title}
        </div>
    );
};

// prop-types conditions for return MovieCard statements in main-view
MovieCard.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
        imageURL: PropTypes.string.isRequired,
        director: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        year: PropTypes.string
    }).isRequired,
    onMovieClick: PropTypes.func.isRequired
};